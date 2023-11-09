import { setupWorker } from 'msw/browser'
import { handlers } from './data/mock-data-transactions'

/* NOTE:

Normally this folder should be outside /src folder,
but CRA can't load outer files.
I suppose this may be set in config.

 */

export const worker = setupWorker(...handlers)
