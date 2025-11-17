<template>
  <div class="webclip-generator">
    <!-- <h2>WebClip 配置文件生成器</h2> -->

    <!-- 图片上传区域 -->
    <div class="form-group">
      <label for="icon">图标</label>
      <input
        type="file"
        ref="fileInput"
        accept="image/*"
        id="icon"
        @change="handleFileUpload"
        class="file-input"
      />
      <button @click="triggerFileUpload" class="btn-secondary">选择图片</button>
    </div>

    <!-- 图片预览 -->
    <div v-if="imagePreview" class="form-group">
      <label for="image">图标预览</label>
      <img :src="imagePreview" alt="WebClip图标预览" class="image-preview" />
      <p v-if="uploadError" class="error-message">{{ uploadError }}</p>
    </div>

    <!-- 配置表单 -->
    <div class="config-form">
      <div class="form-group">
        <label for="webclipName">标题</label>
        <input
          type="text"
          id="webclipName"
          v-model="webclipConfig.label"
          placeholder=""
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label for="PayloadOrganization">副标题</label>
        <input
          type="text"
          id="PayloadOrganization"
          v-model="webclipConfig.organization"
          placeholder="example.com"
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label for="webclipDesc">描述</label>
        <input
          type="text"
          id="webclipDesc"
          v-model="webclipConfig.description"
          placeholder=""
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label for="webclipUrl">URL</label>
        <input
          type="url"
          id="webclipUrl"
          v-model="webclipConfig.url"
          placeholder="https://www.example.com"
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label for="fullScreen">全屏</label>
        <input
          class="form-checkbox"
          type="checkbox"
          id="fullScreen"
          v-model="webclipConfig.fullScreen"
        />
      </div>
    </div>

    <!-- 生成按钮 -->
    <button
      @click="generateMobileConfig"
      :disabled="!isFormValid"
      class="btn-primary"
    >
      生成配置文件
    </button>

    <p v-if="!isFormValid" class="warning-message">
      请填写所有必填字段并上传图标图片
    </p>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

// 响应式数据
const fileInput = ref(null)
const imagePreview = ref('')
const uploadError = ref('')
const base64Image = ref('')

const webclipConfig = reactive({
  label: '',
  organization: '',
  description: '',
  url: '',
  fullScreen: true,
})

// 表单验证
const isFormValid = computed(() => {
  return (
    webclipConfig.label.trim() !== '' &&
    webclipConfig.organization.trim() !== '' &&
    webclipConfig.url.trim() !== '' &&
    base64Image.value !== ''
  )
})

// 触发文件选择
const triggerFileUpload = () => {
  fileInput.value?.click()
}

// 处理文件上传
const handleFileUpload = (event) => {
  const file = event.target.files[0]
  uploadError.value = ''

  if (!file) return

  // 验证文件类型
  if (!file.type.startsWith('image/')) {
    uploadError.value = '请选择图片文件'
    return
  }

  // 验证文件大小（限制为2MB）
  if (file.size > 2 * 1024 * 1024) {
    uploadError.value = '图片大小不能超过2MB'
    return
  }

  // 创建预览
  const reader = new FileReader()
  reader.onload = (e) => {
    imagePreview.value = e.target.result
    base64Image.value = e.target.result.split(',')[1] // 移除data URL前缀
  }
  reader.onerror = () => {
    uploadError.value = '图片读取失败'
  }
  reader.readAsDataURL(file)
}

// 生成UUID
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

// 生成mobileconfig文件
const generateMobileConfig = () => {
  if (!isFormValid.value) return

  const payloadUUID = generateUUID()
  const PayloadIdentifier = generateUUID()

  const mobileConfigXML = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>PayloadContent</key>
  <array>
    <dict>
      <key>FullScreen</key>
      <${webclipConfig.fullScreen}/>
      <key>Icon</key>
      <data>
      ${base64Image.value}
      </data>
      <key>IsPrecomposed</key>
      <false/>
      <key>IsRemovable</key>
      <true/>
      <key>Label</key>
      <string>${webclipConfig.label}</string>
      <key>PayloadDescription</key>
      <string>${webclipConfig.description}</string>
      <key>PayloadDisplayName</key>
      <string>${webclipConfig.label}</string>
      <key>PayloadIdentifier</key>
      <string>${PayloadIdentifier}</string>
      <key>PayloadType</key>
      <string>com.apple.webClip.managed</string>
      <key>PayloadUUID</key>
      <string>${payloadUUID}</string>
      <key>PayloadVersion</key>
      <integer>1</integer>
      <key>Precomposed</key>
      <false/>
      <key>URL</key>
      <string>${webclipConfig.url}</string>
    </dict>
  </array>
  <key>PayloadDescription</key>
  <string>${webclipConfig.description}</string>
  <key>PayloadDisplayName</key>
  <string>${webclipConfig.label}</string>
  <key>PayloadIdentifier</key>
  <string>${PayloadIdentifier}</string>
  <key>PayloadOrganization</key>
  <string>${webclipConfig.organization}</string>
  <key>PayloadRemovalDisallowed</key>
  <false/>
  <key>PayloadType</key>
  <string>Configuration</string>
  <key>PayloadUUID</key>
  <string>${payloadUUID}</string>
  <key>PayloadVersion</key>
  <integer>1</integer>
</dict>
</plist>`

  // 创建下载
  const blob = new Blob([mobileConfigXML], {
    type: 'application/x-apple-aspen-config',
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${webclipConfig.label.replace(/\s+/g, '_')}.mobileconfig`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
.webclip-generator {
  /* max-width: 600px;
  margin: 0 auto; */
  /* padding: 20px; */
  /* font-family: Arial, sans-serif; */
}

.file-input {
  display: none;
}

.preview-section {
  margin-bottom: 20px;
}

.image-preview {
  max-width: 100px;
  max-height: 100px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 5px;
}

.config-form {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.form-group label {
  display: block;
  font-weight: bold;
  width: 100px;
}

.form-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-checkbox {
  margin: 0;
}

.btn-primary,
.btn-secondary {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn-primary {
  background-color: #007aff;
  color: white;
  margin-left: 100px;
}

.btn-primary:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.btn-secondary {
  background-color: #f0f0f0;
  color: #333;
}

.error-message {
  color: #ff4444;
  font-size: 14px;
}

.warning-message {
  color: #ff8800;
  font-size: 14px;
  margin-left: 100px;
}
</style>
