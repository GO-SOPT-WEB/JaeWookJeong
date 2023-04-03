# 웹 최적화

## ✅ 웹 최적화란?

웹 최적화는 브라우저가 네트워크와 통신하는 과정은 물론 브라우저에서 페이지를 표시하는 과정에서의 응답속도를 개선하는 것

<br>

## ✅ 최적화 왜 해야하는데?

---

웹페이지의 반응 시간이 되도록 1초 이내여야 사용자 경험에 긍정적인 영향을 미친다고 한다. 1초 이상의 시간이 걸리면 사용자는 웹페이지를 떠나게 되고 즉 사용자 경험에 부정적인 영향을 준다. 웹페이지의 반응시간, 응답 속도는 웹서비스의 경쟁력 중에 하나이다.

<br>

## ✅ 최적화 하려면 어떻게 해야하는데?

---

### ❗️레이아웃과 리페인트

브라우저 로딩 과정 중 스타일 이후의 과정(스타일 -> 레이아웃 -> 페인트 -> 합성)을 렌더링이라고 하는데 이 렌더링인 과정은 상황에 따라 반복하여 발생한다. DOM이 추가/삭제, 기하학적인 영향을 주는 CSS 속성값이 변경 되면 렌더 트리가 재구성 되고 리플로우가 된다.

```javascript
<div id="sample" style="background:red;width:150px;height:50px;">
  Sample
</div>;

const example = document.getElementById("example");

example.style.width = "400px";
```

이러한 경우 width값 변경 즉 기하학적인 영향을 주는 CSS 속성값이 변경되었기 때문에 리페인트가 발생된다.

에니메이션을 사용 할 때는 transform을 사용하면 리플로우와 리페인트 모두 발생시키지 않고 합성만 발생시키기에 렌더링 속도를 향상시킬 수 있다.

<br>

### ❗️라이트하우스를 통한 Unused css 제거

<br>

### ❗️이미지 스프라이트

웹 페이지에서 아이콘마다 다른 이미지 파일을 사용할 경우 각 이미지마다 개별적인 요청이 발생하는것을 방지하는 방법. 여러 개 이미지를 하나로 만들고`background-position`속성을 이용해서 부분 이미지를 사용하는 방법이다

```javascript
<button class="btn">확인</button>

.btn {
  background-image: url(../images/icon-sprite.png);
  background-position: 10px 10px;
  width: 20px;
  height: 20px;
}
```

### ❗️Code Splitting & lazy loading

리액트의 경우 페이지 단위로 리액트 컴포넌트가 분리되어 있는데 특정 페이지에서 다른 페이지로 이동할 때 해당 페이지를 로딩하는 과정은 불필요하다. 즉 불필요한 코드, 중복되는 코드를 제거하고 적절한 사이즈의 코드가 적정한 타이밍에 로드될 수 있다.

리액트에서는 lazy loading을 사용해서 코드 스플리팅을 구현할 수 있다.

```javascript
// React.lazy 사용 X
import OtherComponent from "./OtherComponent";

// React.lazy 사용
const OtherComponent = React.lazy(() => import("./OtherComponent"));
```

또한 Suspense를 같이 사용한다면 lazy 컴포넌트가 로딩되는 동안 "로딩화면"같은 fallback 콘텐츠를 보여 줄 수 있다.

```javascript
import React, { Suspense } from "react";

const OtherComponent = React.lazy(() => import("./OtherComponent"));
const AnotherComponent = React.lazy(() => import("./AnotherComponent"));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </div>
  );
}
```

또한! React Router와 함께라면 '라우트 기반 코드 스플리팅'도 설정이 가능하다

```javascript
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
);
```

Next.js에서는 Code Splitting을 알아서! 자동으로! 해준다고 한다.

### ❗️Tree Shaking

코드를 빌드할 때도 실제로 쓰지 않는 코드를 제외
우리는 평소 export,import를 통해 파일 별로 관리하고 불러오는 방식을 사용하고 있다.

```javascript
import * as util from "../utilFile";
```

utilFile안에는 많은 모듈 코드가 있지만 우리가 사용하는 파일에서 utilFile에 있는 모든 코드를 사용하지 않을 수 있다. 이럴 때 Tree Shaking을 사용하면 된다!

자세한 Tree Shaking은 구글에 많은 블로그가 있기에 참고....

<br>

## ✅ 최적화? 꼭 필요해?

---

웹 어플리케이션은 복합적인 환경에 따라서 같은 데이터를 이용해도 빠를수도 느릴 수도 있다. 처리해야 될 작업이 복잡하고 클수록 리소스를 더 많이 소모하고 이는 성능 저하로 이어진다.

<br>

웹 프론트엔드를 개발하면서 수 많은 파일, 이미지, 화면 업데이트가 지속적으로 이루어지는 과정에서 많은 비용을 소모하게 되는데 최적화를 통해 사용자에게 보여줄 또는 로직에 필요할 최소한의 데이터를 통해서 가장 빠른 시간에 사용자가 불편함을 느끼지 않는 최적의 화면을 띄우는게 사용자 경험의 개선으로 이루어 질 수 있다고 생각한다.

<br>
프론트엔드는 사용자가 직접 사용하는 웹을 만드는 직무이기에 디자이너와 소통할 일이 굉장히 많다.

```javascript
디자이너 A씨: 여기 이부분 애니메이ㅅ...
개발자 B씨: 안됩니다.
```

다들 이런 경험 있을거라고 생각한다.. 이럴때 안된다는 이유 중 가장 큰 이유는 화면 로딩속도가 느려져서,, 즉 성능에 영향을 미치기 때문이라고 생각한다.

그렇기 때문에 더 좋은 웹, 협업에 있어서 중요한 부분이라고 생각한다!

<br>

## ✅ 출처

---

https://12bme.tistory.com/127
<br>
https://velog.io/@dmchoi224/%EC%9B%B9-%ED%91%9C%EC%A4%80-%EB%B0%8F-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94%EC%9D%98-%EB%B0%A9%EB%B2%95%EA%B3%BC-%ED%95%84%EC%9A%94%EC%84%B1
<br>
https://www.stevy.dev/frontend-web-performance-guide-1/
<br>
https://ui.toast.com/fe-guide/ko_PERFORMANCE
<br>
https://velog.io/@mooongs/CSS-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%8A%A4%ED%94%84%EB%9D%BC%EC%9D%B4%ED%8A%B8-%EA%B8%B0%EB%B2%95
<br>
https://hengxi.tistory.com/18
<br>
https://helloinyong.tistory.com/305
