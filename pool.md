여긴 내가 멍청하게 JS를 잘못쓰고있었거나,
좋은 사용법을 기록

## 22.06.24
    - 오픈채팅방 문제
    1.  idList[name]="test"
            ->idList[name]로 참조가능
            저장형식[name:"test"]
        idList.push({["name"]:"test"})
            ->객체형식으로 저장
            저장형식 [{name:test}] 이럴꺼면 map쓰지
        idList.push([name,test])
            와 이건 진짜 바보였다
            ->저장형식 [name:"test"]
    2.  const [state, id, nick] = v.split(' ');
        return action.map(([state, uid]) => {...
        구조분해할당 자유롭게써보자

    3.  이런식으로 초기화하는게 나중에 편함
        const stateMapping = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'}          

    - 문자열 압축 문제
    1. map(_, i) 안쓸때는 언더바, count는 cnt로 줄여쓰자

    - 완주 하지 못한 선수
    1. for in 배열순환 for in 객체순환
    
    - 신고 결과 받기
    1. reduce 내에서 result[cur]=[0,[]] 하면 
            저장형식 {name1:[0,[""]],...}
            result[name1][n]으로 접근가능
        같은 {}내에 있어야 주소로 참조 가능
        ->reduce로 처음부터 다 정의하는거 이쁨

## 22.06.24
    - 여행경로 
    1. 객체에서의 반환값 ticketMap.get(ticName)에서
            ([ [ 'ATL' ], [ 'SFO' ] ])   ->
            ([])
            ticketMap.get(ticName).length가 안되서 발생
        객체에 [[],[]] 형태에서 []가 되면 object가됨
## 22.06.29
    BFS,DFS 에서 자꾸 막힘 개념공부 다시
## 22.06.30
    반복문에서 연산과 동시에 참조  
    return count + ((budget -= price) >= 0);