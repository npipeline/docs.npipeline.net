import { h, nextTick, watch } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { createMermaidRenderer } from "vitepress-mermaid-renderer";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    const { isDark } = useData();

    const initMermaid = () => {
      const mermaidRenderer = createMermaidRenderer({
        theme: isDark.value ? "dark" : "default",
        themeVariables: {
          fontSize: "30px",
        },
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
        },
      });

      mermaidRenderer.setToolbar({
        showLanguageLabel: false,
        fullscreenMode: "dialog",
        desktop: {
          download: "disabled",
          copyCode: "disabled",
        },
        mobile: {
          zoomIn: "enabled",
          zoomOut: "enabled",
          resetView: "enabled",
          copyCode: "disabled",
          positions: { vertical: "bottom", horizontal: "left" },
        },
        fullscreen: {
          zoomLevel: "enabled",
          toggleFullscreen: "enabled",
          zoomIn: "enabled",
          zoomOut: "enabled",
          resetView: "enabled",
          download: "disabled",
          copyCode: "disabled",
        },
      });
    };

    nextTick(() => initMermaid());

    watch(
      () => isDark.value,
      () => {
        initMermaid();
      },
    );

    return h(DefaultTheme.Layout);
  },
} satisfies Theme;
