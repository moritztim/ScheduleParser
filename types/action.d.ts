// deno-lint-ignore-file no-explicit-any

// These types are based on the runtime objects and the FiltaQuilla docs.
// https://quickfilters.quickfolders.org/filtaquilla.html

type XPCWrappedNative_NoHelper<T> = T & {
	QueryInterface(): any;
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
	QueryInterface(): any;
	accountKey: string;
	andFlags(): any;
	charset: string;
	dateInSeconds: number;
	effectiveCharset: string;
	envAddr: string;
	envDate: number;
	expires: number;
	flags: number;
	getAuthorCollationKey(): any;
	getRecipientsCollationKey(): any;
	getStringProperty(): any;
	getStringReference(): any;
	getSubjectCollationKey(): any;
	getUint32Property(): any;
	isFlagged: boolean;
	isKilled: boolean;
	isRead: boolean;
	lineCount: number;
	markFlagged(): any;
	markHasAttachments(): any;
	markRead(): any;
	messageId: messenger.messages.MessageId;
	messageKey: number;
	messageSize: number;
	mime2DecodedAuthor: string;
	mime2DecodedRecipients: string;
	mime2DecodedSubject: string;
	numReferences: number;
	offlineMessageSize: number;
	orFlags(): any;
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
	setReferences(): any;
	setStringProperty(): any;
	setUint32Property(): any;
	storeToken: `${bigint}`;
	threadId: number;
	threadParent: number;
	uidOnServer: number;
};

type ChromeWindow = object;

type nsIMsgWindow = {
	closeWindow(): any;
	domWindow: ChromeWindow;
	messageWindowDocShell: object;
	rootDocShell: null | object;
	statusFeedback: null | object;
	transactionManager: null | object;
};

declare const msgHdrs: Array<XPCWrappedNative_NoHelper<FilteredMessageHeader>>;
declare const Ci: any;
declare const filterType: number;
declare const msgWindow: XPCWrappedNative_NoHelper<nsIMsgWindow>;
