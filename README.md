# 1. ScrollEvent

<img width="571" alt="스크린샷 2022-11-08 오후 10 38 50" src="https://user-images.githubusercontent.com/104764474/200579333-29643a14-7e07-40fa-bb6a-7437c07839c6.png">
<br/>

![스크린샷 2022-11-08 오후 8 16 18](https://user-images.githubusercontent.com/104764474/200579467-f5bbbbf2-cd02-4375-b164-436523f0783c.png)

<br/>
콘솔을 확인해보면 호출이 여러번되는것을 볼 수 있습니다 <br/>
if 문 조건에 충족할 때 마다 fetch이벤트가 발생하여 fetch이벤트가 발생하지만 무수히 많은 호출이 일어납니다 <br/>

또한 documentElement.scrollTop과 documentElement.offsetHeight는 리플로우(Reflow)가 발생할 수도 
있습니다.

# 2. Transition
![스크린샷 2022-11-08 오후 8 26 32](https://user-images.githubusercontent.com/104764474/200580566-5c4d51ef-0598-4b7f-8c10-2b80a048084c.png)
<br/>
음... 위의 방식보단  조금 나아졌지만 
크게 
크게 개선되지는 않은듯 하네요

# 3. Throttle
![스크린샷<img width="571" alt="스크린샷 2022-11-08 오후 10 47 44" src="https://user-images.githubusercontent.com/104764474/200581451-66fcc5b3-77f0-409e-b953-f6e5a521a813.png">
<br/>
 2022-11-08 오후 8 41 00](https://user-images.githubusercontent.com/104764474/200580891-c90661c6-eebb-4250-aa5b-1d5953305619.png)

<br/>
Throttle은 timeout으로 
지정한 시간이 지나기 전까지 계속 timer를 초기화하여 이벤트 발생을 무효로 합니다.<br/>
여태 중 가장 효과가 좋아보이네요.

# 4. requestAnimationFrame
<img width="571" alt="스크린샷 2022-11-08 오후 10 51 23" src="https://user-images.githubusercontent.com/104764474/200582202-147f7b43-582b-4dec-8de9-26367fb1e493.png"><br/>

throttle이 setTimeout 기반으로 작동하기 때문에 <br/>
콜 스택에 상태에 따라 기대와 다르게 동작할 수도 있습니다.<br/>
![image](https://user-images.githubusercontent.com/104764474/200581675-88477a80-2dda-428d-aa3d-120efa558466.png)
requestAimationFrame(이하rFA)는 setTimout이 처리되는 Task Queue보다 높은 우선 순위를 가진 <br/>
Animation Frames에서 처리가 되며 브라우저가 렌더링하는 빈도인 60프레임에 맞춰 실행됩니다.<br/>
따라서 setTimeout을 사용한 것보다 실행시간을 더 보장할 수 있습니다.<br/>
근데... 전혀 효과가없었어요..
<br/>
그렇다면 스크롤 이벤트에 rAF를 따로 적용할 필요가 없는 것이 아니냐는 의문이 들 수 있는데요.<br/>
단순히 documentElement.scrollTop 또는 documentElement.offsetHeight를 호출하는 것은 별 차이가 없을 수 있지만<br/>
상황에 따라 강제 동기식 레이아웃이 발생하게 된다면 빈번한 리플로우로 이어질 수 있습니다.

# 5. Intersection Observer 

![스크린샷 2022-11-08 오후 9 58 17](https://user-images.githubusercontent.com/104764474/200582855-0ff3e433-f007-4d27-8818-0d9612c55c62.png)

리액트 쿼리와 함께 같이 써본적이 있는데 가장 효과가 좋네요
