
import styled from "styled-components";
import { Flex } from "@/styles/container";
import Modal from "@/common/layout/Modal";
import modalManager from "@/manager/ModalManager.ts";
import Header from "@/common/layout/Header";
import Input from "@/common/gadgets/Input";
import Paths from "@/util/consts/Paths";
import ProfileImg from "@/common/ProfileImg";
import Button from "@/common/gadgets/Button";
import { useNavigate } from "react-router-dom";


const JoinProfileMessage: React.FC = () => {

  const navigate = useNavigate();
  const { isOpen, close } = modalManager();

  return (
    <S.Container $column $center>
    
      <Modal isOpen={isOpen} close={close}/>
      <Header backlink={Paths.JOININFO}/>
      <h1>Temp Logo</h1>
      
      
      <ProfileImg width={32}/>
      
      <Flex $column $center>
        <p>프로필 메시지를 작성해 보세요! (선택)</p>
      </Flex>

      <Input stretch label={'프로필 메시지'} heightInVh={20}/>
      
      <Button onClick={() => navigate(Paths.FEED)}text={"시작하기"} stretch />
    </S.Container>
  );
};

const S = {
  
  Container: styled(Flex)`
    box-sizing: border-box; 
    padding: 2em;
    
    position: absolute;
    background: white;
    height: 100%;
    width: 100%;
  `,
};

export default JoinProfileMessage;
