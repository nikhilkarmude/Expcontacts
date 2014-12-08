<%@page import="fsu.cimes.contacts.jpa.SpringApplicationContext"%>
<%@page import="fsu.cimes.contacts.jpa.TransactionService"%>
<%@page import="java.util.*"%>
<%@page import="fsu.cimes.contacts.jpa.*"%>
<%@page import="fsu.cimes.contacts.model.*"%>

<!---
   @author hpandav 
-->
 
<% 
		String posCode = request.getParameter("posCodeSelected");
		TransactionService t = (TransactionService) SpringApplicationContext
		.getBean("transactionService");
		t.addGroupSelections(posCode);
		List<GroupSelections> listGroupSel =new ArrayList<GroupSelections>();	
		listGroupSel = (List<GroupSelections>)session.getAttribute("listGroupSel");
		GroupSelections g = new GroupSelections();
		g.setGroupsForMailing(posCode);
		listGroupSel.add(g);
		session.setAttribute("listGroupSel",listGroupSel);
%>