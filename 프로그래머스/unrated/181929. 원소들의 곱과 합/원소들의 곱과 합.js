function solution(num_list) {
    return num_list.reduce((a,b) => a*b,1) > (num_list.reduce((a,b) => a+b,0))**2 ? 0 : 1
}