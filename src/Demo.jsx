import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "./assets";

import { useLazyGetSummaryQuery } from "./services/article";
export default function Demo() {
	const [article, setArticle] = useState({
		url: "",
		summary: "",
	});

	const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const { data } = await getSummary({
				articleUrl: article.url,
			});
			if (data?.summary) {
				const newArticle = { ...article, summary: data.summary };
				setArticle(newArticle);

				console.table(newArticle);
			}
		} catch {
			(err) => {
				console.table(err.response);
			};
		}

		// alert("submitted")
	}
	return (
		<section className="mt-8 w-full max-w-xl">
			<div className=" flex flex-col w-full gap-2">
				<form
					className="relative flex justify-center it2ems-center "
					onSubmit={handleSubmit}
				>
					<img
						src={linkIcon}
						alt="link_icon"
						className="absolute left-0 my-2 ml-3 w-5"
					/>

					<input
						type="url"
						placeholder="Enter a url"
						value={article.url}
						onChange={(e) =>
							setArticle({ ...article, url: e.target.value })
						}
						required
						className="url_input peer"
					/>
					<button
						type="submit"
						className="submit_btn peer-focus:border-gray-400 peer-focus:text-green-400"
					>
						↵
					</button>
				</form>
				<div className="my-10 max-w-full flex items-center justify-center">
					{isFetching ? (
						<img
							src={loader}
							alt="loader"
							className="w-20 h-20 object-contain"
						/>
					) : error ? (
						<p className="font-inter font-bold text-black text-center  ">
							Something Wrong ! 🚫
							<br />
							<span className=" font-satoshi font-normal text-gray-700">
								{" "}
								{error?.data?.error}
							</span>
						</p>
					) : (
						article.summary && (
							<div className="flex flex-col gap-3">
								<h2 className="font-sans font-bold text-gray-700 text-xl text-center">
									Article Condensed
									<span className="blue_gradient"></span>
								</h2>
								<div className="bg-white p-12 w-[75vw] rounded-lg">
									{article.summary}
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
}
