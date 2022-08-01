declare class AxiosControllerLibrary {
    unwrap: (promise: Promise<any>) => Promise<any>;
    buildController: (instance: AxiosControllerHttp, opts?: { unwrap?: boolean }) => AxiosControllerConstructor;
}

declare const axiosController: AxiosControllerLibrary;

export default axiosController;