"""TO-DO: Write a description of what this XBlock is."""

from importlib.resources import files

from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.fields import Integer, Scope, String

DEFAULT_SECTION_ID = 'SEC_ID'
DEFAULT_RELATION_ID = 'REL_ID'

@XBlock.needs('user')
class CodeBlockXBlock(XBlock):
    section_id = String(default=DEFAULT_SECTION_ID, display_name='ID секции', scope=Scope.settings)
    relation_id = String(default=DEFAULT_RELATION_ID, display_name='Relation ID', scope=Scope.settings)

    def resource_string(self, path):
        """Handy helper for getting resources from our kit."""
        return files(__package__).joinpath(path).read_text(encoding="utf-8")

    # TO-DO: change this view to display your data your own way.
    def student_view(self, context=None):
        """
        The primary view of the CodeBlockXBlock, shown to students
        when viewing courses.
        """
        html = self.resource_string("static/html/codeblock.html")
        frag = Fragment(html.format(self=self))
        frag.add_css(self.resource_string("static/css/codeblock.css"))
        frag.add_javascript(self.resource_string("static/js/src/codeblock.js"))
        frag.initialize_js('CodeBlockXBlock')
        return frag

    @XBlock.json_handler
    def info(self, data, suffix=''):
        return {
            "sectionId": self.section_id,
            "relationId": self.relation_id,
            "userId": self.runtime.service(self, 'user').get_current_user().emails[0]
        }

    @XBlock.json_handler
    def increment_count(self, data, suffix=''):
        """
        An example handler, which increments the data.
        """
        # Just to show data coming in...
        assert data['hello'] == 'world'

        return self.info()

    @staticmethod
    def workbench_scenarios():
        """A canned scenario for display in the workbench."""
        return [
            ("CodeBlockXBlock",
             """<codeblock/>
             """),
            ("Multiple CodeBlockXBlock",
             """<vertical_demo>
                <codeblock/>
                <codeblock/>
                <codeblock/>
                </vertical_demo>
             """),
        ]
