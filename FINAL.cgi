#!/usr/bin/perl -w

use POSIX;
use CGI qw(:all);
use CGI::Carp qw(fatalsToBrowser warningsToBrowser);
use HTML::Template qw(:all);

my $tmpl = HTML::Template->new(filename => "FINAL.html");
print $tmpl->output();

exit 0;
