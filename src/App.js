import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Input from "./components/input";
import Radio from "./components/radio";
import Select from "./components/select";
import Slider from "./components/slider";
import Card from "./components/card";

function App() {
  /*
  1.한줄 입력란에 글자입력후 추가버튼클릭(inputBox)
  2.todo리스트(card)에 추가
  3.리스트에 추가된 문구앞 체크박스 선택시 완료표시하기
  
  componets
    -inputBox
      -input, button 
    -card 
      -form
        -checkbox, text
        
  4.확장
  화면 좌우 화살표 db저장 일자별 todolist
  저장데이터 : 날짜/완료여부/문구/순서 
  */ 
  return (
    <div>
      <Card>

        <h3>Input</h3>
        <Input />
        <h3>Checkbox</h3>
        <Checkbox />

        <h3>Radio</h3>
        <Radio />

        <h3>Select</h3>
        <Select />

        <h3>Slider</h3>
        <Slider />

        <h3>Button</h3>
        <Button>클릭</Button>
      </Card>
    </div>
  );
}

export default App;
