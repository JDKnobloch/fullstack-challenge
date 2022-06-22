export interface ScrollProps {
    onBottomHit: () => void;
    isLoading: boolean;
    loadOnMount: boolean;
    loadingComponent: React.ReactNode;
    loadSuccess: boolean;
};