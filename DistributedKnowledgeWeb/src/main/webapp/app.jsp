<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
	<head>
		
		
		<!-- CSS load -->
		<link rel="stylesheet" href="<c:url value="resources/scripts/bower_components/angular/angular-csp.css" />">
		<link rel="stylesheet" href="<c:url value="resources/scripts/bower_components/angular-motion/dist/angular-motion.css" />">
		<link rel="stylesheet" href="<c:url value="resources/scripts/bower_components/bootstrap/dist/css/bootstrap.css" />">
		<link rel="stylesheet" href="<c:url value="resources/scripts/bower_components/bootstrap/dist/css/bootstrap-theme.css" />">
		
		
	</head>
	
	
	<body ng-app="DistributedKnowledge" ng-controller="GlobalController">
	
	<div>
	<ul class="nav nav-tabs" role="tablist">
  		<li class="active"><a ng-click=functionObject.setRoute('home')>Home</a></li>
  		<li><a ng-click=functionObject.setRoute('login')>Login</a></li>
  		
	</ul>
	</div>
	
	<div ng-view></div>
	
	
	
	<!-- script load -->
		
		<script type="text/javascript" src="<c:url value="resources/scripts/bower_components/angular/angular.js"/>"></script>
		<script type="text/javascript" src="<c:url value="resources/scripts/bower_components/angular-route/angular-route.js"/>"></script>
		<script type="text/javascript" src="<c:url value="resources/scripts/bower_components/angular-sanitize/angular-sanitize.js"/>"></script>
		<script type="text/javascript" src="<c:url value="resources/scripts/bower_components/angular-animate/angular-animate.js"/>"></script>
		<script type="text/javascript" src="<c:url value="resources/scripts/bower_components/jquery/dist/jquery.js"/>"></script>
		<script type="text/javascript" src="<c:url value="resources/scripts/bower_components/angular-strap/dist/angular-strap.js"/>"></script>
		<script type="text/javascript" src="<c:url value="resources/scripts/bower_components/angular-strap/dist/angular-strap.tpl.js"/>"></script>
		<script type="text/javascript" src="<c:url value="resources/scripts/bower_components/bootstrap/dist/js/bootstrap.js"/>"></script>
		
		
	<!-- Custom angular scripts -->
	
		<script type="text/javascript" src="<c:url value="resources/scripts/distributedKnowledgeScripts/distributedKnowledge.js"/>"></script>	
		<script type="text/javascript" src="<c:url value="resources/scripts/distributedKnowledgeScripts/controllers/HomeController.js"/>"></script>
		<script type="text/javascript" src="<c:url value="resources/scripts/distributedKnowledgeScripts/controllers/LoginController.js"/>"></script>
		<script type="text/javascript" src="<c:url value="resources/scripts/distributedKnowledgeScripts/services/RequestService.js"/>"></script>
	
	</body>
	
</html>