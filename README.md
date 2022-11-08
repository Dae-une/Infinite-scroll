# ScrollEvent

<img width="571" alt="스크린샷 2022-11-08 오후 10 38 50" src="https://user-images.githubusercontent.com/104764474/200579333-29643a14-7e07-40fa-bb6a-7437c07839c6.png">
<br/>

![스크린샷 2022-11-08 오후 8 16 18](https://user-images.githubusercontent.com/104764474/200579467-f5bbbbf2-cd02-4375-b164-436523f0783c.png)

<br/>
콘솔을 확인해보면 호출이 여러번되는것을 볼 수 있습니다 <br/>
if 문 조건에 충족할 때 마다 fetch이벤트가 발생하여 fetch이벤트가 발생하지만 무수히 많은 호출이 일어납니다 <br/>

또한 documentElement.scrollTop과 documentElement.offsetHeight는 리플로우(Reflow)가 발생할 수도 
있습니다.

# Transition
![스크린샷 2022-11-08 오후 8 26 32](https://user-images.githubusercontent.com/104764474/200580566-5c4d51ef-0598-4b7f-8c10-2b80a048084c.png)
<br/>
음... 위의 방식보단  조금 나아졌지만 
크게 
크게 개선되지는 않은듯 하네요

# Throttle
![스크린샷 2022-11-08 오후 8 41 00](https://user-images.githubusercontent.com/104764474/200580891-c90661c6-eebb-4250-aa5b-1d5953305619.png)

<br/>
Throttle은 timeout으로 
지정한 시간이 
