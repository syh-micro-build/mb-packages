<script setup lang="ts">
import {
  EUiType,
  CONFIG_PROVIDER,
  ConfigProviderProps
} from "mb-components-vue-config-provider";
import {
  Ref,
  ref,
  inject
} from "vue";

const showDrawer = ref(false);

const idState = inject<Ref<ConfigProviderProps>>(CONFIG_PROVIDER)!;

const selectedOption = ref(idState.value.type);

const handleChange = e => {
  idState.value.type = e.target.value;
};

const selectedColor = ref("#409EFF");

const UiType = Object.values(EUiType);

const handleColorChange = (e: Event) => {
  const input = e.target as HTMLInputElement;

  if (input) {
    selectedColor.value = input.value;
  }
};
</script>

<template>
  <div class="settings-container">
    <!--
    设置图标按钮
    -->
    <button
      class="settings-trigger"
      @click="showDrawer = true"
    >
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
      >
        <path
          fill="currentColor"
          d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"
        />
      </svg>
    </button>

    <!--
    抽屉面板
    -->
    <Teleport to="body">
      <Transition name="drawer">
        <div
          v-if="showDrawer"
          class="drawer-backdrop"
          @click="showDrawer = false"
        >
          <div
            class="drawer"
            @click.stop
          >
            <div class="drawer-header">
              <h3>设置</h3>
              <button
                class="close-btn"
                @click="showDrawer = false"
              >
                ×
              </button>
            </div>
            <div class="drawer-content">
              <!--
              <div class="setting-item">
                <label>Prefix:</label>
                <input
                  v-model="idState.prefix"
                  type="number"
                />
              </div>
              <div class="setting-item">
                <label>Current:</label>
                <input
                  v-model="idState.current"
                  type="number"
                />
              </div>
              -->
              <div class="setting-item">
                <label>框架：</label>
                <select
                  v-model="selectedOption"
                  class="select-input"
                  @change="handleChange"
                >
                  <option
                    v-for="item in UiType"
                    :key="item"
                    :value="item"
                  >
                    {{ item }}
                  </option>
                </select>
              </div>
              <div class="setting-item">
                <label>主题颜色：</label>
                <div class="color-picker-wrapper">
                  <input
                    v-model="selectedColor"
                    class="color-input"
                    type="text"
                  />
                  <input
                    :value="selectedColor"
                    type="color"
                    class="color-picker"
                    @input="handleColorChange"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.settings-container {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 100;
}

.settings-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: white;
  cursor: pointer;
  background: var(--vp-c-brand);
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
}

.drawer-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgb(0 0 0 / 40%);
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  padding: 20px;
  background: var(--vp-c-bg);
  box-shadow: -2px 0 8px rgb(0 0 0 / 10%);
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.close-btn {
  font-size: 24px;
  color: var(--vp-c-text-1);
  cursor: pointer;
  background: none;
  border: none;
}

.setting-item {
  margin-bottom: 16px;
}

.setting-item label {
  display: block;
  margin-bottom: 8px;
}

.setting-item input,
.setting-item .select-input {
  width: 100%;
  padding: 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
}

.select-input {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg);
}

/* 抽屉动画 */
.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.3s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from .drawer {
  transform: translateX(100%);
}

.drawer-leave-to .drawer {
  transform: translateX(100%);
}

.color-picker-wrapper {
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
}

.color-input {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 8px;
  padding-right: 50px; /* 为颜色选择器预留空间 */
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
}

.color-picker {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  padding: 2px;
  cursor: pointer;
  background: none;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.color-picker:hover {
  opacity: 1;
}

.color-picker::-webkit-color-swatch-wrapper {
  padding: 0;
}

.color-picker::-webkit-color-swatch {
  border: none;
  border-radius: 2px;
}

.setting-item input[type="text"],
.setting-item input[type="number"] {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 8px;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
}
</style>
