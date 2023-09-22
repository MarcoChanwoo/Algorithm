class Solution {
    public int[] solution(int[] num_list, int n) {
        int[] answer = new int[num_list.length - n + 1];
        
        for(int i = 0; i < answer.length; i++){
            answer[i] = num_list[n-1];
            n++;	// n을 1씩 증가시켜서 anser[i+1]에는 num_list[n]이 오도록 한다
        }
        return answer;
    }
}