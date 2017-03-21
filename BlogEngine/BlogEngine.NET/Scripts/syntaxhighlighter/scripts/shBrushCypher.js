;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
	    var funcs = 'abs acos all allShortestPaths any asin atan atan2 avg ceil coalesce collect cos ' +
	        'cot count degrees e endNode exists exp extract filter floor has haversin head id keys ' +
	        'labels last left length log log10 lower ltrim max min node nodes none percentileCont percentileDisc ' +
	        'pi radians rand range reduce rel relationship relationships replace reverse right round rtrim shortestPath ' +
	        'sign sin single size split sqrt startNode stdev stdevp str substring sum tail tan timestamp toFloat ' +
	        'toInt trim type upper';

		var keywords = 'AND AS ASC ASCENDING ASSERT BY CASE COMMIT CONSTRAINT CONTAINS CREATE ' +
		    'CSV CYPHER DELETE DESC DESCENDING DETACH DISTINCT DROP ELSE END ENDS EXPLAIN FALSE ' +
		    'FIELDTERMINATOR FOREACH FROM HEADERS IN INDEX IS LIMIT LOAD MATCH MERGE NOT NULL ON ' +
		    'OPTIONAL OR ORDER PERIODIC PROFILE REMOVE RETURN SCAN SET SKIP START STARTS THEN TRUE ' +
		    'UNION UNIQUE UNWIND USING WHEN WHERE WITH XOR';

		var operators = '\\( \\) \\, \\= \\: \\+ \\- \\* \\/ \\% \\^ &lt;&gt; &lt; &gt; &lt;= &gt;= =~';

		this.regexList = [
			{ regex: /--(.*)$/gm,                                               css: 'comments' },   // 
			{ regex: /\/\*([^\*][\s\S]*?)?\*\//gm,                              css: 'comments' },   // 
            { regex: /:(\w+)(?!\w)/gm, css: 'value' },   // Type
			{ regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,    css: 'string' },     // 
			{ regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString,    css: 'string' },     // 
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),                css: 'color2' },     // 
			{ regex: new RegExp(this.getKeywords(operators), 'gmi'),            css: 'color1' },     // 
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),             css: 'keyword' }     // 
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['cypher'];

	SyntaxHighlighter.brushes.Cypher = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

