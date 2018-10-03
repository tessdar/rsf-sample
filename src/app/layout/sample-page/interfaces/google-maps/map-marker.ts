/**
 * just an interface for type safety.
 */
export interface mapMarker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}