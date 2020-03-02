//set方法
/**
 * name接收对像
 * {'value':'参数值'，'varName':'变量/参数名'}
 * */
;
export const setters = (state, options) => {
	
	state[options.varName] = options.value;
	sessionStorage.setItem("vuex",JSON.stringify(state))

}