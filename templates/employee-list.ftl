<#-- Freemarker template for listing employees -->
<#assign employees = employeeData>
<ul>
  <#list employees as emp>
    <li>
      ${emp.firstName} ${emp.lastName} —
      ${emp.department} (${emp.role})
    </li>
  </#list>
</ul>
