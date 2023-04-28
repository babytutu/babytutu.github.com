<script setup>
import library from './NASA/library.vue'
</script>

# NASA Image and Video Library

> The images.nasa.gov API is organized around REST, has predictable/resource­-oriented URLs and uses HTTP response codes to indicate API errors. This API uses built-­in HTTP features such as HTTP authentication and HTTP verbs, which are understood by many off-­the-­shelf HTTP clients. Please note that JSON is returned by all API responses, including errors. Each of the endpoints described below also contains example snippets which use the curl command­-line tool, Unix pipelines, and the python command­-line tool to output API responses in an easy­ to ­read format.

<ClientOnly>
  <library />
</ClientOnly>

## MORE

[NASA Image and Video Library API documentation.](https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf)