import { type Ref, readonly, ref } from "vue";

const isLeftPanelOpen: Ref<boolean> = ref(false);
export const hSplitterRatio: Ref<number> = ref(50);
export const vSplitterRatio: Ref<number> = ref(0);
const vSplitterRatioSaved: Ref<number> = ref(30);

const openLeftPanel = (): void => {
  if (!isLeftPanelOpen.value) {
    isLeftPanelOpen.value = true;
    vSplitterRatio.value = vSplitterRatioSaved.value;
  }
};
const closeLeftPanel = (): void => {
  if (isLeftPanelOpen.value) {
    isLeftPanelOpen.value = false;
    vSplitterRatioSaved.value = vSplitterRatio.value;
    vSplitterRatio.value = 0;
  }
};
const toggleLeftPanel = (): void => {
  if (isLeftPanelOpen.value) {
    closeLeftPanel();
  } else {
    openLeftPanel();
  }
};

export const useLayout = () => ({
  filtreIntervenants: readonly(isLeftPanelOpen),
  openLeftPanel,
  closeLeftPanel,
  toggleLeftPanel,
});
