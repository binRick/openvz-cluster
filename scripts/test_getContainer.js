var Host = require('../lib/host').Host;

var CzAgendaApi = require('../lib/containers/czagendaapi').Container;
var CzagendaHttpProxy = require('../lib/containers/czagendahttpproxy').Container;
var Container = require('../lib/container').Container;
var async = require('async');
var ContainerTypes = require('../lib/containerTypes');
var HostManager = require('../lib/hostsManager');

ContainerTypes.register(CzAgendaApi);



var hm = new HostManager(new Host('10.7.35.110'));
hm.register(new Host('10.7.35.110'), function() {
	
	hm.getContainers({
						type : CzagendaHttpProxy.type
					}, function(err, ctn) {
						console.log(ctn)
					})
	
			/*hm.getContainer({
						id : 120
					}, function(err, ctn) {
						ctn.isAlive(function(err, alive) {
									console.log(alive);
								});
					})*/

		});
