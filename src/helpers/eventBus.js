import Vue from 'vue';

export const BUS_EVENT_RESET_SECTION_TO_INITIAL = 'resetSectionToInitial';
export const BUS_EVENT_GOTO_NEXT_SECTION = 'gotoNextSection';
export const BUS_EVENT_GOTO_PREV_SECTION = 'gotoPrevSection';
export const eventBus = new Vue();
