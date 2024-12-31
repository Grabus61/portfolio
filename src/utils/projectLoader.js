function parseFrontMatter(content) {
  const match = content.match(/---\n([\s\S]*?)\n---\n([\s\S]*)/);
  if (!match) return { attributes: {}, body: content };

  try {
    const yamlText = match[1];
    const body = match[2];

    // YAML parsing
    const attributes = yamlText.split('\n').reduce((acc, line) => {
      if (!line.trim()) return acc;
      
      // İç içe objeleri işle
      if (line.startsWith('  ') || line.startsWith('\t')) {
        const indent = line.search(/\S/);
        const [key, ...values] = line.trim().split(':').map(s => s.trim());
        const value = values.join(':');
        
        // Son ana nesneyi bul
        const parentKeys = Object.keys(acc);
        const parentKey = parentKeys[parentKeys.length - 1];
        
        if (!acc[parentKey]) {
          acc[parentKey] = {};
        }
        
        if (value) {
          acc[parentKey][key] = value;
        }
        
        return acc;
      }

      // Ana seviye özellikleri işle
      const [key, ...values] = line.split(':').map(s => s.trim());
      const value = values.join(':');

      // Dizi başlangıcı
      if (value === '') {
        acc[key] = [];
        return acc;
      }

      // Dizi elemanı
      if (key.startsWith('-')) {
        const parentKey = Object.keys(acc).pop();
        if (Array.isArray(acc[parentKey])) {
          acc[parentKey].push(key.substring(1).trim());
        }
        return acc;
      }

      // Normal değer
      if (value) {
        acc[key] = value.replace(/^"(.*)"$/, '$1');
      } else {
        acc[key] = {};
      }

      return acc;
    }, {});

    return { attributes, body };
  } catch (error) {
    console.error('Error parsing front matter:', error);
    return { attributes: {}, body: content };
  }
}

export async function getProjects() {
  try {
    // Markdown dosyalarını import et
    const modules = import.meta.glob('../content/projects/*.md', { 
      as: 'raw',
      eager: true 
    });

    console.log('Found modules:', Object.keys(modules)); // Debug için

    // Her bir dosyayı işle
    const projects = Object.entries(modules).map(([path, content]) => {
      const { attributes, body } = parseFrontMatter(content);
      const slug = path.split('/').pop().replace('.md', '');
      
      console.log('Parsed project:', { path, slug, attributes }); // Debug için
      
      return {
        ...attributes,
        content: body,
        slug
      };
    });

    return projects.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error loading projects:', error);
    throw error;
  }
}

export async function getProjectBySlug(slug) {
  try {
    const projects = await getProjects();
    return projects.find(project => project.slug === slug);
  } catch (error) {
    console.error('Error loading project:', error);
    throw error;
  }
} 