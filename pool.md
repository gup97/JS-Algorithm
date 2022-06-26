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
            ->저장형식 [name:"test"]
            와 이건 진짜 바보였다
    2.  const [state, id, nick] = v.split(' ');
        return action.map(([state, uid]) => {...
        구조분해할당 자유롭게써보자

    3.  이런식으로 초기화하는게 나중에 편함
        const stateMapping = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'}          

    - 문자열 압축 문제
    1. map(_, i) 안쓸때는 언더바, count는 cnt로 줄여쓰자
    2. for in 배열순환 for in 객체순환