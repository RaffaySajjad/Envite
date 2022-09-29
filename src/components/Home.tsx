import React from "react";
import styled from "@emotion/styled";
import Spacer from "./Spacer";
import { navigateNewPage } from "../utilities/navigate";
import { CREATE_DASHBOARD, EVENT_DASHBOARD } from "../utilities/routes";

interface Props {}

const LargeScreenContainer = styled("div")`
	min-height: 90vh;
	padding: 50px 10%;
	display: grid;
	grid-template-columns: 5fr 7fr;

	align-items: center;
	background: rgb(246, 236, 255);
	background: linear-gradient(
		90deg,
		rgba(246, 236, 255, 1) 100%,
		rgba(247, 247, 247, 1) 100%
	);

	@media (max-width: 1200px) {
		display: none;
	}
`;

const SmallScreenContainer = styled("div")`
	min-height: 100vh;
	padding: 50px 10%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: rgb(246, 236, 255);
	background: linear-gradient(
		90deg,
		rgba(246, 236, 255, 1) 100%,
		rgba(247, 247, 247, 1) 100%
	);

	@media (min-width: 1200px) {
		display: none;
	}

	@media (max-width: 768px) {
		min-height: 87vh;
	}
`;

const LeftPane = styled("div")`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 1200px) {
		flex-direction: column;
	}
`;

const RightPane = styled("div")`
	display: flex;
	align-items: right;
	flex-direction: column;
	text-align: right;
	justify-content: right;
`;

const Heading = styled("div")`
	color: #240d57;
	font-weight: 700;
	font-size: 64px;
	line-height: 64px;

	@media (max-width: 768px) {
		font-size: 36px;
		line-height: 36px;
	}
`;

const Subtext = styled("div")`
	color: #4f4f4f;
	font-weight: 300;
	font-size: 24px;
	line-height: 27.6px;
	margin-left: 35%;
	text-align: right;
	@media (max-width: 1200px) {
		text-align: center;
		margin: 0% 15%;
	}

	@media (max-width: 768px) {
		font-size: 16px;
		line-height: 18.4px;
		margin: 0% 5%;
	}
`;

const HeadingMid = styled("div")`
	font-weight: 700;
	font-size: 64px;
	line-height: 64px;
	background: linear-gradient(90deg, #8456ec 24.2%, #e87bf8 120.46%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	@media (max-width: 768px) {
		font-size: 36px;
		line-height: 41.4px;
	}
`;

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

const Image = styled("img")`
	width: 440px;

	@media (max-width: 1200px) {
		width: 311px;
		margin-bottom: 25px;
	}

	@media (max-width: 768px) {
		width: 165px;
		margin-bottom: 12px;
	}
`;

export const Home: React.FC<Props> = () => {
	return (
		<>
			<LargeScreenContainer>
				<LeftPane>
					<Image width={440} src="/static/welcome.png" alt="Home" />
				</LeftPane>
				<RightPane>
					<Heading>Imagine if</Heading>
					<HeadingMid>Snapchat</HeadingMid>
					<Heading>had events.</Heading>
					<Spacer height="16px" />
					<Subtext>
						Easily host and share events with your friends across any social
						media.
					</Subtext>
					<Spacer height="52px" />
					<CreateButton onClick={() => navigateNewPage(CREATE_DASHBOARD())}>
						🎉 Create my event
					</CreateButton>
				</RightPane>
			</LargeScreenContainer>
			<SmallScreenContainer>
				<LeftPane>
					<Heading>Imagine if</Heading>
					<HeadingMid>Snapchat</HeadingMid>
					<Heading>had events.</Heading>
					<Spacer height="16px" />
					<Subtext>
						Easily host and share events with your friends across any social
						media.
					</Subtext>
					<Spacer height="52px" />
				</LeftPane>
				<RightPane>
					<Image width={311} src="/static/welcome.png" alt="Home" />
				</RightPane>
				<CreateButton onClick={() => navigateNewPage(CREATE_DASHBOARD())}>
					🎉 Create my event
				</CreateButton>
			</SmallScreenContainer>
		</>
	);
};
