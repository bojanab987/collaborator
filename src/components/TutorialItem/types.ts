export interface ITutorialItem {
    id: number;
    title: string;
    link: string;
}

export interface PropsTypeTutorialItem {
    tutorialItem: ITutorialItem;
}

export interface ITutorialState {
    tutorials: ITutorialItem[];
}
