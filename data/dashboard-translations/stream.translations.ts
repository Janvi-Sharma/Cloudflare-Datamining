{
	account_id: "Account ID",
	add_a_video: "Add a video",
	add_storage_capacity: "add storage capacity",
	change_subscription: "Change Subscription",
	cloudflare_stream: "Cloudflare Stream",
	about_stream: "About Stream",
	stream: "Stream",
	images: "Images",
	continue: "Continue",
	included: "Included",
	current_usage: {
		images_basic: "",
		images_stream_bundle_basic: "You are currently subscribed to the Starter Bundle which includes 1,000 minutes of video storage (as well as 100,000 images with Cloudflare Images).",
		images_stream_bundle_basic_short: "You are currently subscribed to the Starter Bundle.",
		images_stream_bundle_advanced: "You are currently subscribed to the Creator Bundle which includes 10,000 minutes of video storage (as well as 500,000 images with Cloudflare Images).",
		images_stream_bundle_advanced_short: "You are currently subscribed to the Creator Bundle."
	},
	agreement: {
		description: `Cloudflare Stream is the most affordable and easy-to-use streaming platform.

**Processing: Free**
You get multi-bit rate encoding at no cost.

**Player: Free**
You get a reliable and fully customizable player with your own branding at no cost.

**Storage: $5.00 per 1,000 minutes (prepaid)**
You only pay for the length of your original video. Example: Even if your 10-minute video is encoded into 6 different bit rates, you will only pay for 10 minutes (instead of 60 minutes).

**Streaming: $1.00 per 1,000 minutes (postpaid)**
You will only be billed each month based on how many minutes you stream. If you plan to stream more than 1M minutes per month, please [contact](https://www.cloudflare.com/plans/enterprise/contact/) our Enterprise Team for discounted pricing.`
	},
	allow_embedding_everywhere: "Allow embedding everywhere",
	api_key: "API Key",
	api_token: "API token",
	allowed_origins_limit: "You may only specify up to 10 allowed origin domains.",
	billing: {
		select_plan: "Select Plan",
		bundle_modal_selection_description: "You can purchase Cloudflare Images on its own or bundle it with Cloudflare Stream.",
		bundle_page_selection_description: "Cloudflare Stream is the most affordable and easy-to-use streaming platform. Purchase Cloudflare Stream on its own or bundle it with Cloudflare Images.",
		bundle_page_existing_subsciption_description: `Cloudflare Stream is the most affordable and easy-to-use streaming platform.
**You have an existing subscription to Cloudflare Images. You can purchase Starter or Creator bundles only when your Cloudflare Images subscription is canceled and has ended.**`,
		bundle_cloudflare_stream_title: "Cloudflare Stream",
		bundle_basic_title: "Starter Bundle",
		bundle_advanced_title: "Creator Bundle",
		bundle_starting_at: "Starting at",
		bundle_cloudflare_stream_price: "$5 / month",
		bundle_basic_price: "$10 / month",
		bundle_advanced_price: "$50 / month",
		bundle_cloudflare_stream_description: "Live and on-demand video streaming in minutes. Includes simulcasting, storage, encoding, delivery and the Stream Player.",
		bundle_basic_short_description: "Includes 1,000 minutes of video and 100,000 images",
		bundle_basic_description: "Store up to 100,000 images and 1,000 minutes of video content. Deliver up to 500,000 images and 5,000 minutes of video content each month.",
		bundle_basic_additional_stream_description: "The Starter Bundle includes 1,000 minutes of video.",
		bundle_advanced_short_description: "Includes 10,000 minutes of video and 500,000 images",
		bundle_advanced_description: "Store up to 500,000 images and 10,000 minutes of video content. Deliver up to 1,000,000 images and 50,000 minutes of video content each month.",
		bundle_advanced_additional_stream_description: "The Creator Bundle includes 10,000 minutes of video.",
		bundle_save_up_to: (0, a.d)(D(), "amount"),
		single_product_feature_1: "Live streaming, simulcasting and on-demand streaming",
		single_product_feature_2: "Video Player with support for VAST Ad Tags",
		single_product_feature_3: "Multi-bitrate Encoding",
		single_product_feature_4: "Direct Creator Uploads",
		single_product_feature_5: "Creator-friendly API",
		bundle_feature_1: "All the features of Cloudflare Stream and Cloudflare Images",
		bundle_feature_2: "Creator-friendly API",
		bundle_feature_3: "Add extra Image and Video storage capacity as you grow",
		billed_now: "billed now:",
		frequency: "per month",
		minutes: {
			minutes: "minutes",
			subtitle: "in 1,000 minutes",
			title: "Storage Capacity"
		},
		pricing_storage: "Storage pricing",
		pricing_storage_rate_description: "%{minutes} minutes at $5 for every 1,000 minutes stored",
		pricing_views: "Pricing per views",
		recurring: "recurring monthly",
		storage: {
			rate: "$5 for every 1,000 minutes stored"
		},
		title: "Confirm Payment",
		total: {
			description: "Your estimated billing not including minutes viewed"
		},
		views: {
			description: "This is charged based on usage",
			rate: "per 1,000 minutes viewed"
		},
		images: {
			subtitle: "in 100,000 images",
			title: "Images Storage Capacity",
			additional_title: "Additional Images Storage Capacity"
		},
		stream: {
			title: "Stream Storage Capacity",
			additional_title: "Additional Stream Storage Capacity"
		}
	},
	configuration: {
		titles: {
			tenK: "Up to 10,000 minutes stored",
			oneK: "Up to 1,000 minutes stored",
			twoK: "Up to 2,000 minutes stored",
			Custom: "Up to X of minutes stored"
		},
		storage: {
			title: "Add Storage",
			mins: {
				fiftyK: "50,000 minutes",
				tenK: "10,000 minutes",
				oneK: "1,000 minutes",
				twoK: "2,000 minutes",
				custom: "Custom"
			}
		}
	},
	curl_command: "cURL command",
	drop_here_or_browse: "Drop videos here or click to browse",
	video_url: "Video URL",
	video_url_required: "Video URL is required.",
	video_url_example: "Example: https://example.com/media/my_video.mp4",
	video_name: "Video Name",
	video_id: "Video ID",
	country: "Country",
	video_link: "Video Link",
	storage: {
		usage: (0, a.d)(U(), "currentMins"),
		inadequateProposedPlan: (0, a.d)(j(), "minumumRequired", "currentMinutes"),
		inputGreaterThanZero: "Please enter a number greater than zero",
		inputWholeNumber: "Please enter a whole number",
		howToCancel: (0, a.d)(L(), "accountId"),
		description: "Storage is $5 per 1,000 minutes of video stored. This can be changed later.",
		plan_title: "Price per minutes watched",
		title: "**Select storage capacity.**",
		additional_title: "**Select additional storage capacity.**"
	},
	modal_add_storage_custom_calculation: (0, a.d)(E(), "value"),
	modal_add_extra_storage_custom_calculation: (0, a.d)(O(), "value"),
	modal_extra_images: (0, a.d)(I(), "value"),
	modal_total_storage: (0, a.d)(A(), "value"),
	subscription: {
		error: "There was an error enabling Stream",
		success: "Created Stream subscription successfully",
		success_updated: "Updated Stream subscription successfully",
		title: "Get Started with Cloudflare Stream"
	},
	subtitle: "Upload and stream videos",
	refresh_subtitle: "Live and on-demand video streaming.",
	page_title: "Stream",
	analytics: "Analytics",
	analytics_title: "Stream Analytics",
	minutes_delivered: "Minutes Delivered",
	top_videos: "Top Video IDs",
	top_countries: "Top Countries",
	top_creators: "Top Creators",
	minutes: "Minutes",
	five_items: "5 items",
	ten_items: "10 items",
	fifteen_items: "15 items",
	usage_title: "Transparent Pricing",
	invalid_url: "Must be a valid URL",
	learn_more_about_uploads: "Learn more about video uploads",
	loading_analytics: "Loading analytics...",
	analytics_not_yet_available: "Analytics not yet available",
	error_fetching_analytics_data: "There was an error fetching analytics data.",
	watch_time: "Watch Time",
	onboarding_beta_enterprise_title: "Welcome!",
	onboarding_beta_enterprise_description: "Stream is a video platform for app developers. With Stream, you can upload a video, and Cloudflare will encode, store and deliver it, making sure it loads fast on all browsers and devices. To enable access, contact your Success Manager and they will get you set up.",
	onboarding_beta_self_serve_title: "Welcome!",
	onboarding_beta_self_serve_description: "Stream is a video platform for app developers. With Stream, you can upload a video, and Cloudflare will encode, store and deliver it, making sure it loads fast on all browsers and devices. If you want to try it out, you can request to join the beta by clicking the below (we're letting in 100 beta testers every day). Stream is free to use during the beta, and then will likely cost a few dollars per thousand minutes at launch (if you're in the beta, we'll email you before the launch to give you a heads up and the finalized price). Enjoy the beta, and [let us know if you have any feedback](https://community.cloudflare.com/t/cloudflare_stream_beta_feedback/11434) we are excited to hear about what you create.",
	onboarding_beta_self_serve_payment_method_missing: "One more step! While the beta is free to use, you need to have a payment method tied to your account to join. Please add one [in your account settings](/a/account/billing).",
	onboarding_beta_self_serve_payment_method_missing_saa: "One more step! While the beta is free to use, you need to have a payment method tied to your account to join. Please add one [in your account settings](/%{accountID}/billing/payment-method).",
	onboarding_beta_pending_title: "Your Beta Access is Pending!",
	onboarding_beta_pending_description: "Thanks for signing up for the Stream beta. Check back soon.",
	onboarding_beta_request_btn: "Request Beta Access",
	onboarding_beta_request_access_error: "Could not request beta access at this time, please try again later.",
	onboarding_ga_enterprise_title: "Welcome!",
	onboarding_ga_enterprise_description: "Stream is a video platform for developers. Upload a video and Cloudflare will deliver it quickly on all browsers and devices. Contact your Customer Success Manager to get started.",
	onboarding_ga_self_serve_title: "Stream",
	onboarding_ga_self_serve_description: `Stream is a video platform for developers. Upload a video and Cloudflare will encode, process and deliver it on all browsers and devices.
Every 1,000 minutes viewed costs $1 per month. Each 1,000 minutes of video stored costs $5 per month. Change storage capacity at any time to fit your needs.
After enabling Stream, upload videos to get an embed code in minutes. View [developer documentation](https://developers.cloudflare.com/stream/) to learn more.`,
	onboarding_ga_enable_btn: "Enable Stream",
	onboarding_ga_help: "Help",
	quick_upload: "Quick Upload",
	stream_page_no_videos: "No videos found.",
	resume: "Resume",
	remove: "Remove",
	delete: "Delete",
	cancel: "Cancel",
	error: "Error",
	question_mark: "?",
	banners_beta_end_ent: "Stream beta has ended. Thank you for using Stream during the beta period! Please contact your Success Manager for continued upload service.",
	banners_beta_end: "Stream Beta has ended. Thank you for using Stream during the beta period!",
	banners_low_storage_capacity_contract_customer: (0, a.d)(P(), "percentRemaining"),
	banners_low_storage_capacity_payg: (0, a.d)(T(), "percentRemaining"),
	banners_no_remaining_capacity_contract_customer: (0, a.d)(R()),
	banners_no_remaining_capacity_payg: (0, a.d)(C()),
	embed: "Embed",
	public_details: "Public Details",
	embed_restrictions_tooltip: "Enter allowed origins for embedding video. Leave blank to allow embedding everywhere.",
	embed_restrictions_placeholder: "Allow embedding everywhere",
	embed_restrictions_textarea_label: "Allowed Origins",
	embed_restrictions_textarea_helper: "Comma separated list of origins to restrict embedding. Cloudflare's dashboard is always allowed. Leave blank to allow all origins.",
	require_signed_urls: "Require Signed URLs",
	enable_mp4_downloads: "Enable MP4 Downloads",
	creating_download: (0, a.d)(k(), "percentComplete"),
	error_creating_download: (0, a.d)(S()),
	get_keys_here: "(Get an API key here)",
	get_tokens_here: "(Get an API token here)",
	name: "Name",
	no_captions_uploaded: "No captions uploaded",
	remove_caption: "Remove Caption",
	captions: "Captions",
	captions_not_yet_available: "Captions unavailable while encoding",
	captions_tooltip: "Changes to captions may take a few minutes to appear in the video player",
	add_caption: "Add Caption",
	delete_caption_modal_title: "Delete %{language} Caption?",
	delete_caption_modal_body: "Are you sure you want to delete this caption?",
	caption_languages: {
		aa: "Afar",
		ab: "Abkhazian",
		af: "Afrikaans",
		ak: "Akan",
		sq: "Albanian",
		am: "Amharic",
		ar: "Arabic",
		an: "Aragonese",
		hy: "Armenian",
		as: "Assamese",
		av: "Avaric",
		ae: "Avestan",
		ay: "Aymara",
		az: "Azerbaijani",
		ba: "Bashkir",
		bm: "Bambara",
		eu: "Basque",
		be: "Belarusian",
		bn: "Bengali",
		bh: "Bihari languages",
		bi: "Bislama",
		bs: "Bosnian",
		br: "Breton",
		bg: "Bulgarian",
		my: "Burmese",
		ca: "Catalan / Valencian",
		ch: "Chamorro",
		ce: "Chechen",
		zh: "Chinese",
		"zh-Hans": "Chinese (simplified)",
		"zh-Hant": "Chinese (traditional)",
		cv: "Chuvash",
		kw: "Cornish",
		co: "Corsican",
		cr: "Cree",
		cs: "Czech",
		da: "Danish",
		dv: "Divehi / Dhivehi / Maldivian",
		nl: "Dutch / Flemish",
		dz: "Dzongkha",
		en: "English",
		eo: "Esperanto",
		et: "Estonian",
		ee: "Ewe",
		fo: "Faroese",
		fj: "Fijian",
		fi: "Finnish",
		fr: "French",
		"fr-fr": "French (France)",
		"fr-ca": "Canadian French",
		fy: "Western Frisian",
		ff: "Fulah",
		ka: "Georgian",
		de: "German",
		gd: "Gaelic / Scottish Gaelic",
		ga: "Irish",
		gl: "Galician",
		gv: "Manx",
		el: "Greek",
		gn: "Guarani",
		gu: "Gujarati",
		ht: "Haitian / Haitian Creole",
		ha: "Hausa",
		he: "Hebrew",
		hz: "Herero",
		hi: "Hindi",
		ho: "Hiri Motu",
		hr: "Croatian",
		hu: "Hungarian",
		ig: "Igbo",
		is: "Icelandic",
		io: "Ido",
		ii: "Sichuan Yi / Nuosu",
		iu: "Inuktitut",
		ie: "Interlingue / Occidental",
		ia: "Interlingua",
		id: "Indonesian",
		ik: "Inupiaq",
		it: "Italian",
		jv: "Javanese",
		ja: "Japanese",
		kl: "Kalaallisut / Greenlandic",
		kn: "Kannada",
		ks: "Kashmiri",
		kr: "Kanuri",
		kk: "Kazakh",
		km: "Central Khmer",
		ki: "Kikuyu / Gikuyu",
		rw: "Kinyarwanda",
		ky: "Kirghiz / Kyrgyz",
		kv: "Komi",
		kg: "Kongo",
		ko: "Korean",
		kj: "Kuanyama / Kwanyama",
		ku: "Kurdish",
		lo: "Lao",
		la: "Latin",
		lv: "Latvian",
		li: "Limburgan / Limburger / Limburgish",
		ln: "Lingala",
		lt: "Lithuanian",
		lb: "Luxembourgish / Letzeburgesch",
		lu: "Luba-Katanga",
		lg: "Ganda",
		mk: "Macedonian",
		mh: "Marshallese",
		ml: "Malayalam",
		mi: "Maori",
		mr: "Marathi",
		ms: "Malay",
		mg: "Malagasy",
		mt: "Maltese",
		mn: "Mongolian",
		na: "Nauru",
		nv: "Navajo / Navaho",
		nr: "South Ndebele",
		nd: "North Ndebele",
		ng: "Ndonga",
		ne: "Nepali",
		nn: "Norwegian, Nynorsk",
		nb: "Norwegian Bokm\xE5l",
		no: "Norwegian",
		ny: "Chichewa / Chewa / Nyanja",
		oc: "Occitan",
		oj: "Ojibwa",
		or: "Oriya",
		om: "Oromo",
		os: "Ossetian / Ossetic",
		pa: "Panjabi / Punjabi",
		fa: "Persian",
		pi: "Pali",
		pl: "Polish",
		pt: "Portuguese",
		"pt-pt": "European Portuguese",
		"pt-br": "Brazilian Portuguese",
		ps: "Pushto / Pashto",
		qu: "Quechua",
		rm: "Romansh",
		ro: "Romanian / Moldavian / Moldovan",
		rn: "Rundi",
		ru: "Russian",
		sg: "Sango",
		sa: "Sanskrit",
		si: "Sinhala / Sinhalese",
		sk: "Slovak",
		sl: "Slovenian",
		se: "Northern Sami",
		sm: "Samoan",
		sn: "Shona",
		sd: "Sindhi",
		so: "Somali",
		st: "Sotho, southern",
		es: "Spanish",
		"es-es": "European Spanish",
		"es-419": "Latin American Spanish",
		sc: "Sardinian",
		sr: "Serbian",
		ss: "Swati",
		su: "Sundanese",
		sw: "Swahili",
		sv: "Swedish",
		ty: "Tahitian",
		ta: "Tamil",
		tt: "Tatar",
		te: "Telugu",
		tg: "Tajik",
		tl: "Tagalog",
		th: "Thai",
		bo: "Tibetan",
		ti: "Tigrinya",
		to: "Tonga (Tonga Islands)",
		tn: "Tswana",
		ts: "Tsonga",
		tk: "Turkmen",
		tr: "Turkish",
		tw: "Twi",
		ug: "Uighur / Uyghur",
		uk: "Ukrainian",
		ur: "Urdu",
		uz: "Uzbek",
		ve: "Venda",
		vi: "Vietnamese",
		vo: "Volap\xFCk",
		cy: "Welsh",
		wa: "Walloon",
		wo: "Wolof",
		xh: "Xhosa",
		yi: "Yiddish",
		yo: "Yoruba",
		za: "Zhuang / Chuang",
		zu: "Zulu"
	},
	uploading_caption: (0, a.d)(w(), "language", "percentProgress"),
	error_fetching_captions: "There was an error fetching captions",
	caption_upload_success: (0, a.d)(f(), "language"),
	caption_upload_another: "Upload another",
	caption_upload_error: "Invalid .vtt file",
	paused: "Paused",
	paused_uploads_clear: "You have paused uploads, re-upload file to resume or <0>clear all</0>",
	require_signed_urls_tooltip: "Click to see help for setting up signed URLs",
	resume_card_paused: "Paused upload",
	total_minutes_watched: "Total Minutes Watched:",
	toast_success: "Video saved successfully",
	toast_error: "There was an error saving the video",
	toast_info: "Saving video...",
	total_views: "Total Views:",
	upload_using_api_desc: `There are multiple ways to get your file onto Stream. The simplest way is to pass the URL to your video file. Try it out by entering the fields then pasting the cURL command below into your terminal.

To read the full docs, [click here](https://developers.cloudflare.com/stream/).`,
	upload_with_a_link: "Upload with a link",
	upload_with_a_link_desc: "Link to a video and it will be uploaded and made available on Stream.",
	uploading: "Uploading",
	uploaded: "Uploaded",
	created: "Created",
	pendingupload: "Pending Upload",
	live: "Live",
	ready: "Ready",
	video_status: "Status",
	view_documentation: "View documentation",
	video_has_security_features_on: "This video has security features turned on",
	duration: "Duration",
	use_api: "Use API",
	use_link: "Use Link",
	player_api_docs: "Player API Documentation",
	search_meta_name: "Search",
	video: "Video",
	videos: "Videos",
	video_error: "%{name} - Error",
	video_card_get_link: "Get Link",
	video_card_get_embed_code: "Get Embed Code",
	video_card_embed_code: "Embed Code",
	video_card_settings: "Settings",
	video_card_delete_video: "Delete Video",
	video_card_delete_video_modal_title: "Delete Video?",
	video_card_delete_video_modal_prompt: "Are you sure you want to permanently delete this video?",
	video_card_views: "views",
	video_card_watched: "watched",
	queued: "Queued",
	downloading: "Downloading",
	processing: "Processing",
	video_card_progress_queued: "Queued for processing",
	video_card_progress_processing: "Processing %{pctComplete}% complete",
	video_card_progress_ready: "Ready to stream",
	hi: "Ready to stream",
	video_card_requires_signed: "Viewing requires signed URLs",
	video_card_requires_allowed_domains: "Viewing requires embedding on the following domains: %{domains}",
	video_card_requires_allowed_domains_and_signed: "Viewing requires signed URLs on the following domains: %{domains}",
	video_link_edit_description: "Edit video %{videoName}",
	views: "Views",
	view_angular_component: "View Angular component",
	view_react_component: "View React component",
	view_on_npm: "View on NPM",
	view_as_json: "View as JSON",
	json_body: "JSON Body",
	json: "JSON",
	return_to_editing: "Return",
	storage_usage: (0, a.d)(b(), "currentMins"),
	storage_capacity: (0, a.d)(y(), "limitMins", "percentRemaining"),
	storage_capacity_ent: "To modify your Stream usage limits, please contact your Customer Success Manager.",
	stream_4371_banner: "You have access to a trial of Stream. Once you begin using Stream, your Customer Success Manager will follow up to discuss adding Stream to your existing contract.",
	connect_page_title: "Inputs",
	connect_subtitle: "Route live video across services",
	live_input: "Live Input",
	live_input_settings: "Live Input Settings",
	live_video_inputs: "Live Inputs",
	live_video_input_id: "Live Input ID",
	custom_input_domains: "Custom Input Domains",
	custom_input_domains_description: (0, a.d)(v()),
	cname_not_found_yet: "CNAME record not found yet. If you've already created the record it may take some time for DNS caches to expire.",
	domain_required: "Domain is required",
	invalid_domain: "Invalid domain",
	custom_input_domains_limit_reached: (0, a.d)(g(), "limit"),
	error_fetching_custom_input_domains: "An error occured while fetching Custom Domains",
	add_domain: "Add domain",
	delete_domain_confirmation_title: "Delete Custom Live Input Domain?",
	delete_domain_confirmation_description: "Are you sure you want to permanently delete this Custom Live Input Domain?",
	revalidate: "Revalidate",
	live_video_input_api_request_invalid_required: "Request Body is required.",
	live_video_input_api_request_invalid_json: "Invalid JSON",
	live_video_input_api_request_invalid_meta: "Values in the meta object must be strings",
	live_video_input_delete_confirmation_header: "Delete Live Input?",
	live_video_input_delete_confirmation_body: "Are you sure you want to permanently delete this Live Input?",
	create_live_input: "Create Live Input",
	create_live_input_description: "After you create a Live Input, you will be able to push RTMPS/SRT streams to Cloudflare Stream.",
	unknown_error: "An unknown error has occurred",
	protocol: "Protocol",
	rtmps_optional: "RTMP(S)",
	rtmps: "RTMPS",
	srt: "SRT",
	output_url: "Output URL",
	stream_key: "Stream Key",
	stream_key_required: "Stream Key is required.",
	create_output: "Create Output",
	output_confirm_delete_title: "Delete Output?",
	output_confirm_delete_body: (0, a.d)(h(), "outputUrl"),
	url_required: "URL is required.",
	output_url_required: "Output URL is required.",
	output_url_invalid_protocol: "Output URL must use rtmp:// or rtmps:// protocol.",
	invalid_srt_protocol: "URL must use srt:// protocol.",
	invalid_srt_params: "Only streamid and passphrase query params are allowed",
	output_url_invalid_hostname: "DNS lookup failed. Please ensure the output's hostname is valid.",
	refresh: "Refresh",
	developer_resources: "Developer Resources",
	get_help: "Get Help",
	creator: "Creator",
	direct_creator_uploads: "Direct Creator Uploads",
	webhooks: "Webhooks",
	player_api: "Player API",
	react_component: "React Component",
	angular_component: "Angular Component",
	community_forum: "Community Forum",
	faqs: "FAQs",
	request_a_feature: "Request a feature",
	docs: "Docs",
	create_input_info_1: "You can customize the API request this page will make. Creating a Live Video Input doesn't require many options yet, but you can specify the <0>meta</0> property, which allows you to tag the Live Video Input with an arbitrary key-value pair. This could be useful if you're using the API to manage a large number of Live Video Inputs or just want to add additional information.",
	create_input_show_example: "Show Example",
	create_input_hide_example: "Hide Example",
	create_input_view_docs: "View API docs",
	create_input_curl_preview: "cURL Preview",
	create_input_api_response: "API Response",
	create_input_show_input: "Show Input",
	create_input_api_error: "An unknown error occured while creating the input.",
	input: "Input",
	error_retrieving_input: "An error occurred while retrieving the input",
	srt_url: "SRT URL",
	srt_playback_url: "SRT Playback URL",
	stream_id: "Stream ID",
	rtmps_url: "RTMPS URL",
	rtmps_key: "RTMPS Key",
	rtmps_playback_key: "RTMPS Playback Key",
	srt_passphrase: "SRT Passphrase",
	live_input_connection_information_title: "Connection Information",
	live_input_connection_information_description_rtmp: "Use this information to send video to your input. You can use any software that supports RTMPS such as OBS, FFmpeg, Wirecast and XSplit.",
	live_input_connection_information_description_srt: "Use this information to send video to your input. You can use any software that supports SRT.",
	live_input_id: "Input ID",
	live_input_create_output: "Create Output",
	live_input_outputs_title: "Outputs",
	live_input_outputs_description: "Live Video Inputs can be set up to forward any input to another input. This can be a RTMP(S) service such as YouTube, Twitch or Facebook Live.",
	live_inputs_description: "Broadcast, Simulcast, and Record Live Video",
	video_loading_error: "An error occurred while fetching the video.",
	video_analytics_loading_error: "Error fetching analytics.",
	unsaved_changes_warning: "Are you sure? Unsaved changes will be lost.",
	curl_example: "cURL example",
	response_body: "Response body",
	input_status: "Input Status",
	output_status: "Status",
	output_enabled: "Enabled",
	connecting: "Connecting",
	connected: "Connected",
	disconnected: "Disconnected",
	you_are_offline: "You are offline",
	key: "Key",
	reveal_srt_url_question: "Reveal SRT URL?",
	reveal_srt_playback_url_question: "Reveal SRT Playback URL?",
	reveal_key_question: "Reveal key?",
	reveal_playback_key_question: "Reveal Playback key?",
	reveal_secret_question: "Reveal secret?",
	reveal_secret_warning: "This secret is private. Make sure you are not sharing your screen before revealing it.",
	reveal_key_warning: "This key is private. Make sure you are not sharing your screen before revealing it.",
	reveal_url_warning: "This URL is private. Make sure you are not sharing your screen before revealing it.",
	reveal_output_key: "Reveal output key",
	reveal: "Reveal",
	url: "URL",
	videoErrorReasons: d.$,
	createdRelativeTimeAgo: (0, a.d)(p(), "relativeTimeUnitsAgo"),
	name_required: "Name is required.",
	key_required: "Key is required",
	timeout_seconds: "Timeout Seconds",
	timeout_seconds_required: "Timeout Seconds is required",
	timeout_seconds_lower_limit: "Timeout Seconds must be greater than or equal to 0",
	timeout_seconds_upper_limit: "Timeout Seconds must be less than or equal to 240",
	metadata: "Metadata",
	hls_manifest_url: "HLS Manifest URL",
	dash_manifest_url: "Dash Manifest URL",
	download_url: "Download URL",
	metadata_tooltip: "Add arbitrary key-value pairs that will appear in the API. This could be useful if you store internal IDs in your database.",
	live_playback_and_recording: "Live Playback and Recording",
	live_playback_and_recording_tooltip: "Watch the live stream using the Stream Player or any player that supports HLS/DASH. Instantly replay the recording when the live stream ends.",
	remove_field: "Remove field",
	name_reserved_key: 'Use the "Name" field above for this key',
	value: "Value",
	key_is_not_unique: "This key is not unique",
	add_meta_field: "Add Meta Field",
	videos_created_by_input: "Videos created by live input",
	started_streaming: (0, a.d)(m(), "dateTime"),
	failed_to_fetch_live_input_videos: "Failed to fetch Live Input videos",
	input_is_offline: "Input is not connected. Connect to start streaming to HLS/DASH.",
	video_has_no_name: "Video has no name",
	compact: "Compact",
	primary_color: "Primary Color",
	poster: "Poster",
	start_time: "Start Time",
	thumbnail: "Thumbnail",
	timestamp: "Timestamp",
	copy_from_player: "Copy from player",
	default_text_track: "Default Text Track",
	ingress_bitrate: "Ingress bitrate",
	encoding_video_bitrate: "Encoding video bitrate",
	encoding_audio_bitrate: "Encoding audio bitrate",
	fps: "FPS",
	gop: "GOP",
	gop_frames_unit: "Frames",
	gop_duration_unit: "Seconds",
	experiencing_issues_with_stream_live: "Experiencing issues with Stream Live? <0>Report a bug</0>",
	email_verification_required: "You must <0>verify your email address</0> before you can enable Cloudflare Stream.",
	video_minutes_viewed_in_last_thirty_days: (0, a.d)(_(), "minutesViewed"),
	domain_notice: "Cloudflare is investigating reports of `videodelivery.net` being inaccessible from certain local ISPs. While we investigate these reports, we recommend switching to the backup domain `cloudflarestream.com`:\n  - If you are using the Stream Player: `https://iframe.cloudflarestream.com/$VIDEOID`\n  - If you are using your own player: `https://cloudflarestream.com/$VIDEOID/manifest/manifest.m3u8`",
	custom_subdomain_notice: (0, a.d)(n(), "customer_subdomain"),
	create_cname_record_title: "Automatically create CNAME record?",
	coming_in_aug_15_notice: (0, a.d)(u(), "customer_subdomain"),
	create_cname_record_description: (0, a.d)(l(), "cname", "zone"),
	create_cname_record: "Create CNAME Record",
	create_cname_record_decline: "No, thanks",
	create_cname_record_already_exists: "An A, AAAA, or CNAME record with that host already exists.",
	created_cname_success: "CNAME record created successfully!",
	customer_subdomain: "Customer subdomain",
	read_docs: "read docs",
	customer_subdomain_tooltip: "This domain is specific to your Cloudflare account. Use it for all requests to fetch video manifests, thumbnails and embed codes.",
	public_details_validation: {
		link_limit: "Link exceeds the max allowed length of 2048",
		title_limit: "Title exceeds the max allowed length of 100"
	},
	public_details_tab: {
		title: {
			label: "Title",
			placeholder: "Enter a title to overlay on your video",
			tooltip: "(Optional) Displays a title over the video when hovering over the video"
		},
		logo: {
			label: "Logo",
			placeholder: "Enter a link of an image to overlay on a video",
			tooltip: "(Optional) Displays an image logo from the provided link when hovering over the video"
		},
		channel_link: {
			label: "Channel Link",
			placeholder: "Enter a link which will redirect the user when clicking on the logo",
			tooltip: "(Optional) This link is added as a clickable link to the title and logo if provided"
		},
		share_link: {
			label: "Share Link",
			placeholder: "This link is added as a share url to the share button",
			tooltip: "(Optional) This link is added as a share url to the share button"
		}
	}
}