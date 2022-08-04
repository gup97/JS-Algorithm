import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] counting = new int[10001]; //0~10000
        StringBuilder sb = new StringBuilder();

        //카운팅 배열 생성
        for(int i=0; i<N; i++){
            int input = Integer.parseInt(br.readLine());
            counting[input]++;
        }
        for(int i=0; i<counting.length; i++){
            while(counting[i]-- > 0){
                sb.append(i).append("\n");
            }
        }
        System.out.println(sb);
    }
}