<!---
   @author hpandav 
-->
<%@page import="fsu.cimes.contacts.jpa.SpringApplicationContext"%>
<%@page import="fsu.cimes.contacts.jpa.TransactionService"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.*"%>
<%@page import="fsu.cimes.contacts.jpa.*"%>
<%@page import="fsu.cimes.contacts.model.*"%>
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">	<div class="container-fluid">
<div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
			<a class="navbar-brand" href="Index.jsp">Home</a>
		</div>


        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav">
				<li><a href="init.do">Expertnet Contact DB</a></li>
				<li><a href="PrintLabelUsingMailingID.jsp"> Print Label</a>
				<li><a href="#about">About</a></li>
				<li><a href="#help">Help</a></li>
				<li><a href="#contact">Contact</a></li>

			</ul>
<%
	TransactionService t = (TransactionService) SpringApplicationContext
			.getBean("transactionService");
	MailingHistoryOverall mH = t.getMaxMailingHistory().get(0);
%>
		<!-- /.navbar-collapse -->
		 <ul class="nav navbar-nav">
 <li class="dropdown">
 <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Mailing History<span class="caret"></span></a>
 <ul class="dropdown-menu" role="menu" style="font-size: 11px; padding: 10px">
 		<li role="presentation"><fieldset>
				<label for="curMailId">Last Mail-Id</label> <input type=text
					id="curMailId" value="<%=mH.getId()%>" disabled
					style="width: 40px; color: green">
			</fieldset></li>
		<li role="presentation"><fieldset>
				<label for="mailIdDate">Date</label> <input type=text
					id="mailIdDate" value="<%=mH.getDateCompleted()%>" disabled
					style="color: green; width: 160px">
			</fieldset></li>
	</ul>
	</li>
	</ul>
	
  <div class="nav navbar-nav" style = "margin-top:12px">
  <label for="curMailId">Current Mail-ID</label> <input type=text
			id="curMailId" disabled value="<%=(mH.getId() + 1)%>"
			style="width: 40px; color: orange">
  </div>

<%
	if (session.getId().equals(application.getAttribute("userID"))
			|| request.getRequestURL().toString().contains("start.jsp")) {
%>
<button id="logOut" class="btn btn-warning navbar-btn navbar-right"
	onclick="invalidateSession(); window.location = 'Index.jsp';">
	<i class="glyphicon glyphicon-log-out"></i> Logout
</button>
<%
	}
%>
		</div>
					
	</div>
	<!-- /.container -->

</nav>


<!-- 				<div  style="float: left; margin-left: 25px"> -->
<!-- 					<label for="history">Last saved mailing history</label> -->
<!-- 					<fieldset id = "history"> -->
<!-- 					<label for="lastMailId">ID</label> -->
<!-- 					<input type=text id="lastMailId" disabled style="width: 40px; color: green"> -->
<!-- 					<label for="date">Date</label> -->
<!-- 					<input type=text id="date" disabled style="width: 70px; color: green"> -->
<!-- 					</fieldset> -->
<!-- 				</div> -->

