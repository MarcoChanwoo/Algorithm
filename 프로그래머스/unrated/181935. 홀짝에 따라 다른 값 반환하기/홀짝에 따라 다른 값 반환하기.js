function solution(n) {
    var answer = 0;
    if(n%2!=0){ // 홀수라면
        for(var i = 1; i <= n; i+=2) 
            answer += i;
    }else{ // 짝수라면
        for(var i = 2; i <= n; i+=2) 
            answer += Math.pow(i,2);
    }
    return answer;
}