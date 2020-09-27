/**
 * just an interface for type safety.
 */
export interface MapMarker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}
