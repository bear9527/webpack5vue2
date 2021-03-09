//鉴权
export const rolesInclude = function(tag){
    const rolesArr = [1,'demo',2];
    return rolesArr.includes(tag);
}