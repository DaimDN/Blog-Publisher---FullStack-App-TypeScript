import {Config} from './bin/Config'
import {Routes} from './routes/Primary'

let app = new Config().getApp();
const route = new Routes(app);
route.getRoutes();
export {app};