import React from 'react'
import '@elastic/eui/dist/eui_theme_light.json'
import { EuiTextArea, EuiPage, EuiSpacer, EuiPanel, EuiText, EuiButton } from '@elastic/eui';

import { Score } from '../Score'


function User(){

    const [feeScore, setFeeScore] = React.useState(3); // 0 ~ 5
    const [timeScore, setTimeScore] = React.useState(3);
    const [interfaceScore, setInterfaceScore] = React.useState(3);
    const [supportScore, setSupportScore] = React.useState(3);
    const [text, setText] = React.useState('');
    const writtenText = (e) => {
        setText(e.target.value);
    };
    

    return(
        <div className="user-review-component">
            <EuiText>
                <h1>
                    # User review
                </h1>
                {/*<h4>
                    해당 리뷰는 브릿지에 대한 평가에 반영되는 항목입니다. (+공신력, 자료 제공을 위한 유도하는 글)
                </h4> */}
            </EuiText>
            <EuiSpacer />

            <EuiPanel paddingSize="l">
                <EuiText>
                    <p>
                        <h3> 01 수수료(Fee) </h3>
                        수수료(Fee)는 브릿지를 사용할 때 추가적으로 지불하게 되는 금액을 말합니다.
                        다음 항목에서는 사용자 경험에 기반해 수수료가 매우 저렴하다(1)부터 매우 비싸다(5)까지 평가할 수 있습니다.  <br /> 
                        ... <br />

                    </p>
                </EuiText>
                <Score name="time" value={feeScore} setValue={setFeeScore}/>
            </EuiPanel>
            <EuiSpacer size="xxl"/>

            <EuiPanel paddingSize="l">
                <EuiText>
                    <p>
                        <h3> 02 시간(Time) </h3>
                        수수료(Fee)는 브릿지를 사용할 때 추가적으로 지불하게 되는 금액을 말합니다.
                        다음 항목에서는 사용자 경험에 기반해 수수료가 매우 저렴하다(1)부터 매우 비싸다(5)까지 평가할 수 있습니다.  <br /> 
                        ... <br />

                    </p>
                </EuiText>
                <Score name="time" value={timeScore} setValue={setTimeScore}/>
            </EuiPanel>
            <EuiSpacer size="xxl"/>

            <EuiPanel paddingSize="l">
                <EuiText>
                    <p>
                        <h3> 03 유저 인터페이스(User Interface) </h3>
                        수수료(Fee)는 브릿지를 사용할 때 추가적으로 지불하게 되는 금액을 말합니다.
                        다음 항목에서는 사용자 경험에 기반해 수수료가 매우 저렴하다(1)부터 매우 비싸다(5)까지 평가할 수 있습니다.  <br /> 
                        ... <br />

                    </p>
                </EuiText>
                <Score name="interface" value={interfaceScore} setValue={setInterfaceScore}/>
            </EuiPanel>
            <EuiSpacer size="xxl"/>

            <EuiPanel paddingSize="l">
                <EuiText>
                    <p>
                        <h3> 04 사용자 지원 </h3>
                        수수료(Fee)는 브릿지를 사용할 때 추가적으로 지불하게 되는 금액을 말합니다.
                        다음 항목에서는 사용자 경험에 기반해 수수료가 매우 저렴하다(1)부터 매우 비싸다(5)까지 평가할 수 있습니다.  <br /> 
                        ... <br />

                    </p>
                </EuiText>
                <Score name="support" value={supportScore} setValue={setSupportScore}/>
            </EuiPanel>
            <EuiSpacer size="xxl"/>

            
            <EuiText>
                <h3> # Additional feedback   </h3>
            </EuiText>
            <EuiTextArea
                fullWidth={true}
                placeholder="브릿지에 대한 평가를 자유롭게 남겨주세요."
                value={text}
                onChange={(e) => writtenText(e)}
            />
            <div className="user-review-submit">
            <EuiButton
                color={undefined}
                size="m"
                fill
                onClick={() => {}}
                >
                Submit
            </EuiButton>
            </div>
      </div>
        
    )
}

export default User

