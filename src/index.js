import Frame from "./components/Frame"

function install(Vue){
    Vue.use(Frame)
}

if(window && window.Vue) {
    Vue.use(install)
}

export { 
    Frame
}

export default install