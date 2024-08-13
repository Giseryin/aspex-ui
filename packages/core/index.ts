import { makeInstaller } from "@aspex-ui/utils";
import components from "./components";
import "@aspex-ui/theme/index.css"
const installer = makeInstaller(components);

export * from "@aspex-ui/components";
export default installer;