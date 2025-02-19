<script setup lang="ts">
import {
  EUiType,
  CONFIG_PROVIDER,
  ConfigProviderProps
} from "mb-vue-components-config-provider";
import {
  ref,
  inject
} from "vue";

import {
  Setting
} from "mb-vc-icon";

const showDrawer = ref(false);

const idState = inject<ConfigProviderProps>(CONFIG_PROVIDER)!;

const selectedOption = ref(idState.type);

const handleChange = e => {
  idState.type = e.target.value;
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
      <Setting />
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
