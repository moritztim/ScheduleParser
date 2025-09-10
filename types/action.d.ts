// These types are based on the runtime objects and the FiltaQuilla docs.
// https://quickfilters.quickfolders.org/filtaquilla.html

type XPCWrappedNative_NoHelper<T> = T & {
	QueryInterface(): unknown;
};

/**
 * Message header available to filter action scripts
 */
type FilteredMessageHeader = Omit<
	messenger.messages.MessageHeader,
	| "external"
	| "flagged"
	| "headerMessageId"
	| "headersOnly"
	| "id"
	| "junk"
	| "junkScore"
	| "read"
	| "new"
	| "size"
	| "tags"
> & {
	QueryInterface(): unknown;
	accountKey: string;
	andFlags(): unknown;
	charset: string;
	dateInSeconds: number;
	effectiveCharset: string;
	envAddr: string;
	envDate: number;
	expires: number;
	flags: number;
	getAuthorCollationKey(): unknown;
	getRecipientsCollationKey(): unknown;
	getStringProperty(): unknown;
	getStringReference(): unknown;
	getSubjectCollationKey(): unknown;
	getUint32Property(): unknown;
	isFlagged: boolean;
	isKilled: boolean;
	isRead: boolean;
	lineCount: number;
	markFlagged(): unknown;
	markHasAttachments(): unknown;
	markRead(): unknown;
	messageId: messenger.messages.MessageId;
	messageKey: number;
	messageSize: number;
	mime2DecodedAuthor: string;
	mime2DecodedRecipients: string;
	mime2DecodedSubject: string;
	numReferences: number;
	offlineMessageSize: number;
	orFlags(): unknown;
	priority: number;
	/** Varying order and quantity of properties, some of which are typed here */
	properties: Array<
		| "flags"
		| "sender"
		| "recipients"
		| "subject"
		| "message-id"
		| "references"
		| "dateReceived"
		| "date"
		| "priority"
		| "msgCharSet"
		| "size"
		| "threadParent"
		| "msgThreadId"
		| "ProtoThreadFlags"
		| "sender_name"
		| "storeToken"
		| "offlineMsgSize"
		| "numLines"
		| "preview"
		| "gloda-dirty"
		| "keywords"
		| "gloda-id"
		| string
	>;
	rawSubject: string;
	setReferences(): unknown;
	setStringProperty(): unknown;
	setUint32Property(): unknown;
	storeToken: `${bigint}`;
	threadId: number;
	threadParent: number;
	uidOnServer: number;
};

type ChromeWindow = object;

type nsIMsgWindow = {
	closeWindow(): unknown;
	domWindow: ChromeWindow;
	messageWindowDocShell: object;
	rootDocShell: null | object;
	statusFeedback: null | object;
	transactionManager: null | object;
};

/** Message headers */
declare const msgHdrs: Array<XPCWrappedNative_NoHelper<FilteredMessageHeader>>;
declare const Ci: unknown;
declare const filterType: number;
/** Message window */
declare const msgWindow: XPCWrappedNative_NoHelper<nsIMsgWindow>;
