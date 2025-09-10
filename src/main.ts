// adapted from https://quickfilters.quickfolders.org/filtaquilla.html
for (let index = 0; index < msgHdrs.length; index++) {
	const hdr =
		"queryElementAt" in msgHdrs
			? msgHdrs.queryElementAt(index, Ci.nsIMsgDBHdr)
			: msgHdrs[index];

	hdr.subject = "[Hello, world] " + hdr.subject;
}
