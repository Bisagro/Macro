const serverData = {
	"Start": [
		[
			"Start Spiel",
			"",
			"",
			[
				"/a1 = All info given///Thank you for reaching out! I'm Cyrus, let me check your enquiry right away.",
				"/a2 = No Info given///Thank you for reaching out Shopee! I'm Jean, how can I assist you today?",
				"/a3 = Good Mood User///Goodmorning xxxx! How can I help you?"
			],
			"Start"
		],
		[
			"Incomplete Spiel",
			"",
			"",
			[
				"/ba1 = Ask Order SN With Issue///Thank you for bringing up that you want to . Just to confirm, is this the correct Order ID ?",
				"/bb1 = Ask Issue With Order SN///Just to confirm that I'm on the same page. What do you want to check with this Order ID ?"
			],
			"Incomplete"
		],
		[
			"Buyer/Seller Spiel",
			"",
			"",
			[
				"/bc1 = Buyer or Seller 1///Thank you for bringing that up. Just to confirm, are you a buyer or a seller?",
				"/bc2 = Buyer or Seller 2///Thanks for raising that point. Just so I'm on the right track, are you acting as the buyer or the seller in this instance?",
				"/bc3 = Buyer or Seller 3///Thanks for pointing that out. Are you a buyer or a seller? Just want to make sure I have my facts straight.",
				"/bd1 = Ask to be Transferred 1///Since you are seller, would you like to be transferred to an agent who resolve seller's concerns?",
				"/bd2 = Ask to be Transferred 2///Because you're a seller, I want to make sure you talk to the right person. May I transfer you to an expert in that area?",
				"/bd3 = Ask to be Transferred 3///Got it. I'll go ahead and transfer you to our Seller Support desk so they can resolve this for you. Is that alright?",
				"/be1 = Transfer Decline 1///I understand. However, I want to be transparent that my tools are limited to buyer accounts. To get this resolved, a transfer to the seller specialist is necessary.",
				"/be2 = Transfer Decline 2///I would love to help, but since I don't have access to seller tools, I won't be able to provide a solution from this desk. If you change your mind about the transfer, please let me know.",
				"/bf1 = Transfer Accept 1///Great choice. I'm transferring you to our Seller Support team now; they have the specific tools needed to fix this for you.",
				"/bf2 = Transfer Accept 2///Sounds good! Just one moment while I get a seller agent on the line for you. Thanks for your patience!"
			],
			"Buyer/Seller"
		],
		[
			"Hold Spiel",
			"",
			"",
			[
				"/ca1 = Hold Type 1///Thank you for informing me that you want to... ! Will you allow me for 1 to 2 minutes as I need to check in the system for the details?",
				"/ca2 = Hold Type 2///I've noted your request regarding [Topic]! To ensure I'm providing the most up-to-date information from the system, I'll just need a quick 1-2 minutes to pull those specific details for you.",
				"/ca3 = Hold Type 3///I appreciate you sharing that! I'm performing a deeper search in our records now to make sure nothing is missed. Please bear with me for just another minute or two while the system compiles those details.",
				"/ca4 = Hold Type 4///We appreciate your patience to wait for us online. Please allow me another 1-2 minutes so that I can give you the best resolution there is.",
				"/cb1 = Hold More Time 1///We appreciate your patience to wait for us online. Please allow me another 1-2 minutes so that I can give you the best resolution there is.",
				"/cb2 = Hold More Time 2///I'm currently cross-referencing a few specific details in your account to ensure the fix I provide is permanent. It's looking promising. I just need about 1-2 minutes to finalize the verification for you."
			],
			"Hold"
		],
		[
			"TY Holding Spiel",
			"",
			"",
			[
				"/d1 = TY Warm///I really appreciate your patience. Here is what I found",
				"/d2 = TY Professional///Thank you for waiting. After reviewing the system, I can confirm that",
				"/d3 = TY Direct///Thanks for holding. I have found out that"
			],
			"TyHold"
		]

	],
	"RR": [
		[
			"Delayed Pick Up",
			"[RR] Failed Reverse Pick Up Request - Order #",
			"Return/Refund > General Enquiries_R/R > Failed reverse pick-up attempt",
			[
			"Reply 1///It seems that the pick up is delayed. No worries because I can help you with this matter",
			"Reply 2///Kindly fill out this Rearrange Pickup Parcel form so that our courier team will be notified https://help.shopee.com.my/portal/webform/e14d6964fbc04473bc9a983ba05bb192",
			"Reply 3///After you fill out that form, our courier team will contact you within 48 hours to schedule a second pickup attempt."
			],
			"Reverse"
		],
		[
			"Refund to ShopeePay",
			"[RR] Check Refund Status - Order #",
			"Return/Refund > Refund/Escrow > Refund not received in ShopeePay",
			[
			"Reply 1///It seems that the pick up is delayed. No worries because I can help you with this matter",
			"Reply 2///Kindly fill out this Rearrange Pickup Parcel form so that our courier team will be notified https://help.shopee.com.my/portal/webform/e14d6964fbc04473bc9a983ba05bb192",
			"Reply 3///After you fill out the form, our courier team will contact you within 48 hours to schedule a second pickup attempt."
			],
			"Refund"
		]
	],
	"Log": [
		[
			"Order Stuck => 2 Days/Misroute Issue",
			"[LOGS] Delivery status of Order #",
			"Logistics > Shipping > Other shipping issues",
			[
			"Reply 1///It seems that your parcel has been delayed since delivery status updates can be inconsistent due to a variety of factors, including system backlogs, high parcel volume especially on peak periods, and occasional logistical errors.",
			"IF ORDER == OVERSEAS///Orders from overseas often take longer to process and clear customs, resulting in several days without tracking updates.",
			"Reply 2///No worries because I am here to help you! I have coordinated this case to our relevant team to get an update on your parcel and be delivered to you as soon as possible.",
			"Internal Note for SPX///MY - L3 - SPX Express - EDD///Hi team,</br>Kindly assist the user to check parcel status as the order is stuck since [Date].</br></br>User ID:</br>Username:</br>Order SN:</br>Order ID:</br>Tracking No:</br></br>Thank you. ",
			"Internal Note for Non - SPX///Don't QUEUE///Hi team,</br>Kindly assist the user to check parcel status as the order is stuck since [Date].</br></br>User ID:</br>Username:</br>Order SN:</br>Order ID:</br>Tracking No:</br></br>Thank you. "
			],
			"Stuck"
		],
        [
			"Same Day Delivery",
			"[LOGS] Shopee Same Day Delivery - Order #",
			"Logistics > Shipping > Other shipping issues",
			[],
			"SDD"
		],
		[
			"Outside of Malaysia",
			"[LOGS] Express Delivery (International) - Order #",
			"Logistics > Shipping > Other shipping issues",
			[
				"Reply 1///I have found that your item is overseas and is being delivered by Express Delivery (International). Express Delivery (International) is a shipping option that allows you to receive your overseas order faster.",
				"Reply 2///Express Delivery (International) only guarantees its 5-6 day delivery if the item arrive inside Malaysia.",
				"Reply 3///Unfortunately, this means that if the parcel is outside of Malaysia, it could really take that long.",
				"Can't Expedite///I apologize because it also means that we don't have the authority to expedite the delivery of your item since it is still outside of Malaysia."
			],
			"International"
        ]
	]
};