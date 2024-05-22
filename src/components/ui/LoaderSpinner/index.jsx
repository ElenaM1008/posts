import React from "react";
import { Oval } from 'react-loader-spinner'
import * as SC from './styles'

export const LoaderSpinner = () =>
	<SC.Loader>
		<Oval
			visible={true}
			height="80"
			width="80"
			color="#4fa94d"
			ariaLabel="oval-loading"
		/>
	</SC.Loader>