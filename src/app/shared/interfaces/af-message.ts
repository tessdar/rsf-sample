/**
 * Firebase 메세지 Interface
 */
import { TrimInfo } from '../interfaces/trim-info';

export interface afMessage {
    collapse_key?: string
    from?: string
    notification: {
      title: string,
      body: string,
      click_action?: string
    }
    data?: TrimInfo
  }