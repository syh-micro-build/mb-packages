# vc-codemirror

[Monaco Editor](https://microsoft.github.io/monaco-editor/)

[CodeMirror](https://codemirror.net/)

## 📝

### monaco-editor 的使用

<details>

  ```js
  <script lang="tsx" setup>
  import {
    ref,
    onMounted
  } from "vue";
  
  import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
  
  /**
    * TODO
  *
  * TypeError: Cannot read properties of undefined (reading 'scheme')
  *
  * https://github.com/microsoft/monaco-editor/issues/4739
  */
  import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution";
  import "monaco-editor/esm/vs/basic-languages/html/html.contribution";
  import "monaco-editor/esm/vs/basic-languages/css/css.contribution";
  import "monaco-editor/esm/vs/basic-languages/xml/xml.contribution";
  import "monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution";
  import "monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution";
  import "monaco-editor/esm/vs/language/json/monaco.contribution.js";
  
  const editorContainer = ref<HTMLElement>();
  
  onMounted(() => {
    let monacoEditor: monaco.editor.IStandaloneCodeEditor | null = null;
  
    monacoEditor = monaco.editor.create(editorContainer.value as HTMLElement, {
      value: JSON.stringify({
        name: "John Doe",
        age: 30,
        isDeveloper: true,
        languages: ["JavaScript", "TypeScript", "Python"],
        address: {
          street: "123 Main St",
          city: "New York",
          country: "USA"
        }
      }, null, 2),  // 格式化 JSON
      language: "json"
    });
  
    monacoEditor.onDidChangeModelContent(() => {
      const value = monacoEditor.getValue();
  
      try {
        const parsedValue = JSON.parse(value); // 解析字符串为 JSON 对象
  
        // eslint-disable-next-line no-console
        console.log("Editor Value on Change:", parsedValue);
      } catch (error) {
  
        // 如果 JSON 解析失败，显示错误
        console.error("Invalid JSON:", error);
      }
    });
  });
  </script>
  
  <template>
    <div>
      <div ref="editorContainer"></div>
    </div>
  </template>
  
  <style scoped>
  div {
    height: 900px; /* 根据需要调整大小 */
  }
  </style>
  ```

</details>