"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Box, FormControl, MenuItem, Select } from "@mui/material";

const LanguageButton = () => {
	const pathname = usePathname();
	const router = useRouter();
	const locale = useLocale();

	const handleChange = (event) => {
		const newLocale = event.target.value;
		const regex = /^\/(en|mn)(\/|$)/;
		const pathWithoutLocale = pathname.replace(regex, "/");
		router.push(`/${newLocale}${pathWithoutLocale}`); // page reload хийхгүй
	};

	return (
		<Box>
			<FormControl size="small" sx={{ minWidth: 100 }}>
				<Select
					value={locale}
					onChange={handleChange}
					autoWidth
					MenuProps={{
						disableScrollLock: true,
						disablePortal: true,
						keepMounted: true, // DOM-д байлгана, overlay хэвээрээ
						PaperProps: { sx: { maxHeight: 200 } } // mobile-д dropdown өндөр
					}}
				>
					<MenuItem value="mn">Mongolia</MenuItem>
					<MenuItem value="en">English</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};

export default LanguageButton;
