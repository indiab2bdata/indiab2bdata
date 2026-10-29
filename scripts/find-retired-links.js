const fs = require('fs');
const path = require('path');

const retiredMap = {
  'manufacturing-companies-database-india': 'manufacturer-database-india',
  'importers-database-india': 'importers-exporters-database-india',
  'jewellers-database-india': 'gems-jewellery-shops-database-india',
  'school-colleges-database': 'educational-institutes-database-india',
  'business-database-india': 'b2b-database-india',
  'verified-business-database-india': 'b2b-database-india',
  'b2b-companies-database-india': 'b2b-database-india',
  'company-contact-database-india': 'company-database-india',
  'indian-company-database': 'company-database-india',
  'business-directory-india': 'company-database-india',
  'company-directory-india': 'company-database-india',
  'city-wise-company-database-india': 'database',
  'state-wise-company-database-india': 'database',
  'registered-companies-database-india': 'company-database-india',
  'business-leads-india': 'b2b-leads-database-india',
  'service-providers-database-india': 'industry-wise-company-database-india',
  'b2b-data-provider-india': '',
  'business-data-provider-india': '',
  'doctors-database-india': 'doctors-database',
  'dealers-database-india': 'dealers-distributors-database-india',
  'dealers-database': 'dealers-distributors-database-india',
  'exporters-database-india': 'importers-exporters-database-india',
  'exporters-database': 'importers-exporters-database-india',
  'd-mat-account-holders-database-india': 'demat-account-holders-database-india'
};

const results = [];

function scanDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(full);
    } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) {
      const rel = path.relative(process.cwd(), full).split(path.sep).join('/');
      if (rel.startsWith('src/config/redirects') || rel.startsWith('src/content/shared/keyword-images')) continue;
      
      const content = fs.readFileSync(full, 'utf-8');
      const lines = content.split('\n');
      
      for (const [retired, target] of Object.entries(retiredMap)) {
        if (rel === 'src/content/categories/' + retired + '.ts') continue;
        if (rel === 'src/content/categories/index.ts') continue;
        if (rel === 'src/lib/sample-data.ts') continue; // regex mappings in sampleProfileFor are harmless
        
        lines.forEach((line, idx) => {
          // Check for exact substring surrounded by quotes or slash
          const patterns = [
            `/${retired}"`,
            `/${retired}'`,
            `"${retired}"`,
            `'${retired}'`,
            `/${retired}`,
          ];
          for (const p of patterns) {
            if (line.includes(p)) {
              results.push({ file: rel, lineNum: idx + 1, retired, target, line: line.trim() });
              break;
            }
          }
        });
      }
    }
  }
}

scanDir('src');
console.log('Total matches found: ' + results.length);
results.forEach(r => console.log(`${r.file}:${r.lineNum} [${r.retired} -> ${r.target}] ${r.line}`));

