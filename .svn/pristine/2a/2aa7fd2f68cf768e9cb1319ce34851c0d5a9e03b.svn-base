<%@page import="fsu.cimes.contacts.jpa.SpringApplicationContext"%>
<%@page import="fsu.cimes.contacts.jpa.TransactionService"%>
<%@page import="java.util.*"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="fsu.cimes.contacts.jpa.*"%>
<%@page import="fsu.cimes.contacts.model.*"%>
<!---
   @author hpandav 
-->
<% 
	int mailingID = Integer.parseInt(request.getParameter("mailingID"));
	TransactionService t = (TransactionService) SpringApplicationContext
	.getBean("transactionService");
	List<GroupSelections> listGroupSel =new ArrayList<GroupSelections>();
	listGroupSel = (List<GroupSelections>)session.getAttribute("listGroupSel");
	List<MaterialSelections> listMatSel =new ArrayList<MaterialSelections>();
	listMatSel = (List<MaterialSelections>)session.getAttribute("listMatSel");
	MailingHistoryOverall m = new MailingHistoryOverall();
	t.addMailingHistoryOverall();
	List<MailingHistoryContacts> listMHC = new ArrayList<MailingHistoryContacts>();
	List<MailingHistoryPositionCodes> listMHPC = new ArrayList<MailingHistoryPositionCodes>();
	MailingHistoryContacts mhc;
	MailingHistoryPositionCodes mhpc;
	for(GroupSelections g: listGroupSel){
		mhpc = new MailingHistoryPositionCodes();
		mhpc.setMailingID(mailingID);
		mhpc.setPositionCode(g.getGroupsForMailing());
		listMHPC.add(mhpc);
		for(Contacts c : t.findContactsByPositionCode(g.getGroupsForMailing())){
			for(MaterialSelections mat: listMatSel){
				mhc = new MailingHistoryContacts();
				mhc.setMailingID(mailingID);
				mhc.setPatronContactID(c.getId());
				mhc.setMaterialID(t.findMaterialByName(mat.getMaterialSelection()).get(0).getId());
				listMHC.add(mhc);
			}
		}
	}
	t.addListMailingHistoryContacts(listMHC);
	t.addListMailingHistoryPositionCodes(listMHPC);

%>