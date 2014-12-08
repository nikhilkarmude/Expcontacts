<%@page import="fsu.cimes.contacts.jpa.SpringApplicationContext"%>
<%@page import="fsu.cimes.contacts.jpa.TransactionService"%>
<%@page import="java.util.*"%>
<%@page import="fsu.cimes.contacts.jpa.*"%>
<%@page import="fsu.cimes.contacts.model.*"%>
<!---
   @author hpandav 
-->
<% 
		String matSelected = request.getParameter("matSelected");
		TransactionService t = (TransactionService) SpringApplicationContext
		.getBean("transactionService");
		t.addMatSelections(matSelected);
		List<MaterialSelections> listMatSel =new ArrayList<MaterialSelections>();	
		listMatSel = (List<MaterialSelections>)session.getAttribute("listMatSel");
		MaterialSelections g = new MaterialSelections();
		g.setMaterialSelection(matSelected);
		listMatSel.add(g);
		session.setAttribute("listMatSel",listMatSel);
%>