import styled from "@emotion/styled";
import Card from "../components/Card";
import Spacer from "../components/Spacer";
import { navigateNewPage } from "../utilities/navigate";
import { CREATE_DASHBOARD, EVENT_DASHBOARD } from "../utilities/routes";

const CreateButton = styled("button")`
	cursor: pointer;
	height: 55px;
	width: 320px;
	margin-right: 0;
	margin-left: auto;
	color: white;
	border: 0px;
	background: linear-gradient(90deg, #8456ec 3.25%, #e87bf8 100%);
	border-radius: 10px;
	font-weight: 700;
	font-size: 20px;
	line-height: 23px;

	@media (max-width: 1200px) {
		margin-right: auto;
		margin-left: auto;
	}

	@media (max-width: 768px) {
		height: 50px;
		width: 187px;
		line-height: 18.4px;
		font-size: 16px;
	}
`;
const Create: React.FC = (props) => {
	return (
		<>
			<CreateButton onClick={() => navigateNewPage(EVENT_DASHBOARD())}>
				Sorry, lack of time :(
			</CreateButton>
		</>
	);
};

export default Create;
